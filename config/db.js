const mongoose = require('mongoose');

let memServer;

const connectDB = async (uri) => {
  if (process.env.USE_IN_MEMORY === 'true') {
    const { MongoMemoryServer } = require('mongodb-memory-server');
    memServer = await MongoMemoryServer.create();
    const memUri = memServer.getUri();
    await mongoose.connect(memUri);
    return mongoose.connection;
  }
  await mongoose.connect(uri);
  return mongoose.connection;
};
module.exports = connectDB;
