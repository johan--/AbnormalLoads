var SALT_WORK_FACTOR, bcrypt, crypto, password;

crypto = require('crypto');

bcrypt = require('bcrypt');

SALT_WORK_FACTOR = 10;

password = "LVi/Lg63tr6mM+xL{vrb";

bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
  if (err) {
    return console.log('ERROR GENERATING SALT');
  } else {
    return bcrypt.hash(password, salt, function(err, hash) {
      if (err) {
        return console.log('ERROR GENERATING PASSWORD');
      } else {
        return console.log('PASSWORD: ' + hash);
      }
    });
  }
});
