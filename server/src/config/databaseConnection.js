const MongoClient = require("mongodb").MongoClient;

let mongoDB;

const setupDB = (callback) => {
  const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@gql-relay-wmxeq.mongodb.net/test?retryWrites=true&w=majority`;

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db("gql-relay");

      if (err) {
        return callback(err);
      } else {
        return callback("DB OK");
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };
