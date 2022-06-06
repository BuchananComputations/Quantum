// This function is the endpoint's request handler.
exports = function changePassword(email, newPassword, callback) {
  const bcrypt = require('bcrypt');
  const MongoClient = require('mongodb@3.1.4').MongoClient;
  const client = new MongoClient('mongodb+srv://admin:6105860966Jb@angularrealm.aytfm.mongodb.net/?');

  client.connect(function (err) {
    if (err) return callback(err);

    const db = client.db('sample_mflix');
    const users = db.collection('users');

    bcrypt.hash(newPassword, 10, function (err, hash) {
      if (err) {
        client.close();
        return callback(err);
      }

      users.update({ email: email }, { $set: { password: hash } }, function (err, count) {
        client.close();
        if (err) return callback(err);
        callback(null, count > 0);
      });
    });
  });
}