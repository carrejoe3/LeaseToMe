module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    username: {
      type: Datatypes.STRING,
      unique: true
    },
    first_name: {
      type: Datatypes.STRING
    },
    last_name: {
      type: Datatypes.STRING
    },
    user_type: {
      type: Datatypes.STRING
    },
    email: {
      type: Datatypes.STRING,
      unique: true
    },
    password: {
      type: Datatypes.STRING
    },
    company: {
      type: Datatypes.STRING
    },
    phone: {
      type: Datatypes.INTEGER
    }
  })

  return User
}
