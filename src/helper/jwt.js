const jwt = require('jsonwebtoken');

function createToken(user) {
  const secret = process.env.JWT_SECRET;
  const payLoad = { id: user[0].id, email: user[0].email, name: user[0].name };

  return jwt.sign(payLoad, secret);
}

module.exports = createToken;
