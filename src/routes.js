import { Router } from 'express';

import DevController from './app/controllers/DevController';
import LikeController from './app/controllers/LikeController';

const routes = new Router();

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);

export default routes;
