import http from 'http';
import express from 'express';
import cors from 'cors';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.app = express();
    this.sever = http.Server(this.app);

    this.socketIO(this.sever);
    this.midlewares();
    this.routes();
  }

  midlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }

  socketIO(server) {
    const io = require('socket.io')(server);

    io.on('connection', socket => {
      console.log('Nova conexao', socket.id);
    });
  }
}

export default new App();
