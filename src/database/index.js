import mongoose from 'mongoose';

class Database {
  mongoose() {
    this.mongoConnection = mongoose.connect(
      'mongodb+srv://root:adminusr@cluster-tindev-dbtwx.mongodb.net/tindev-omnistack?retryWrites=true&w=majority',
      {
        UseNewUrlParser: true,
        useFindAndModify: true,
      }
    );
  }
}

export default new Database();
