import axios from 'axios';
import Dev from '../models/Dev';

class DevController {
  async index(req, res) {
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } },
      ],
    });

    return res.json(users);
  }

  async store(req, res) {
    const { username } = req.body;

    // Verificar se o usuário já existe
    const userExist = await Dev.findOne({ user: username });

    if (userExist) {
      return res.json(userExist);
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    });

    return res.json(dev);
  }
}

export default new DevController();
