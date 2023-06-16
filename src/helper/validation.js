const ExceptionType = require('../exceptions/exceptions');

function isValidData(req, res, next) {
  const { name, surname, email, pwd } = req.body;

  if (!name) throw new Error(ExceptionType.USER_NAME_EMPTY);
  if (!surname) throw new Error(ExceptionType.USER_SURNAME_EMPTY);
  if (!email) throw new Error(ExceptionType.USER_EMAIL_EMPTY);
  if (!pwd) throw new Error(ExceptionType.USER_PWD_EMPTY);

  if (!isNaN(name)) throw new Error(ExceptionType.USER_NAME_INVALID);
  if (!isNaN(surname)) throw new Error(ExceptionType.USER_SURNAME_INVALID);
  // eslint-disable-next-line no-useless-escape
  if (!/^[\w\.\-]+@[a-z]{4,}\.[a-z]{2,}$/gm.test(email)) throw new Error(ExceptionType.USER_EMAIL_INVALID);
  if (pwd.length < 8) throw new Error(ExceptionType.USER_PWD_INVALID);

  next();
}

module.exports = isValidData;
