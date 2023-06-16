const ExceptionType = {
  DB_POST_USER_EXISTS: 'user exists',
  DB_POST_USER_NOT_CREATED: "user doesn't create",
  DB_POST_USER_PWD_NOT_MATCH: "password doesn't match",

  USER_NAME_EMPTY: 'user name is empty',
  USER_SURNAME_EMPTY: 'user surname is empty',
  USER_EMAIL_EMPTY: 'user email is empty',
  USER_PWD_EMPTY: 'user pwd is empty',

  USER_NAME_INVALID: 'incorrect user name',
  USER_SURNAME_INVALID: 'incorrect user surname',
  USER_EMAIL_INVALID: 'incorrect user email',
  USER_PWD_INVALID: 'pwd is less than 8 symbols',
};

module.exports = ExceptionType;
