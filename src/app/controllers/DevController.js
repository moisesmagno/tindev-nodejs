import Dev from '../models/Dev';

class DevController {
  async store(req, res) {
    return res.json(req.body);
  }
}

export default new DevController();
