// This function is the endpoint's request handler.
exports = function verify (email, callback) {
  const MongoClient = require('mongodb@3.1.4').MongoClient;
  const client = new MongoClient('mongodb+srv://admin:6105860966Jb@angularrealm.aytfm.mongodb.net/?');

  client.connect(function (err) {
    if (err) return callback(err);

    const db = client.db('sample_mflix');
    const users = db.collection('users');
    const query = { email: email, email_verified: false };

    users.update(query, { $set: { email_verified: true } }, function (err, count) {
      client.close();

      if (err) return callback(err);
      callback(null, count > 0);
    });
  });
}