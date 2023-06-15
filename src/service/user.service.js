const bcrypt = require('bcrypt');
const { createUserDB, getUserByEmailDB } = require('../repository/user.repository');

const saltround = 3;

async function createUser(name, surname, email, pwd) {
  const findUser = await getUserByEmailDB(email);
  if (findUser.length) throw new Error('user exsists');

  const hashedPassword = await bcrypt.hash(pwd, saltround);

  const data = await createUserDB(name, surname, email, hashedPassword);

  if (!data.length) throw new Error('user not created');

  return data;
}

async function authUserEmail(email, pwd) {
  const findUser = await getUserByEmailDB(email);
  if (!findUser.length) throw new Error('user exsists');

  const hashPwd = findUser[0].pwd;

  const isMatch = await bcrypt.compare(pwd, hashPwd);

  if (!isMatch) throw new Error("password doesn't match");

  return findUser;
}
module.exports = { createUser, authUserEmail };
