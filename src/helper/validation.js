function isValidData(req, res, next) {
  const { name, surname, email, pwd } = req.body;

  if (!name) throw new Error('name is empty');
  if (!surname) throw new Error('surname is empty');
  if (!email) throw new Error('email is empty');
  if (!pwd) throw new Error('pwd is empty');

  if (!isNaN(name)) throw new Error('incorrect name');
  if (!isNaN(surname)) throw new Error('incorrect surname');
  // eslint-disable-next-line no-useless-escape
  if (!/^[\w\.\-]+@[a-z]{4,}\.[a-z]{2,}$/gm.test(email)) throw new Error('incorrect email');
  if (pwd.length < 8) throw new Error('pwd less than 8 symbols');

  next();
}

module.exports = isValidData;
