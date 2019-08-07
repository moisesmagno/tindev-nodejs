import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongoose();
  }

  mongoose() {
    this.mongoConnection = mongoose.connect(
      'mongodb+srv://root:adminusr@cluster-tindev-dbtwx.mongodb.net/tindev_omnistack?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
      }
    );
  }
}

export default new Database();
