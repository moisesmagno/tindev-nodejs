import Dev from '../models/Dev';

class LikeController {
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user); // Dados do usuáiro que está dando o like.
    const targetDev = await Dev.findById(devId); // Dados do usuário que está recebendo o like.

    // Verifica se o dev a quem será dado o like existe.
    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists!' });
    }

    // verifica-se se o Id que o usúario logado que add na sua base, já não o adicionou antes tmb, dessa forma daria um match.
    if (targetDev.likes.includes(loggedDev._id)) {
      console.log('Match!');
    }

    // Adicionar o id do usuário que está recenbo o like, no array likes do usúario logado.
    loggedDev.likes.push(targetDev._id);
    await loggedDev.save();

    return res.json(loggedDev);
  }
}

export default new LikeController();
