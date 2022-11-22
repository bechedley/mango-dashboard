const { User } = require('../models');

const userData = [
  {
    username: "userOne",
    email: "userone@email.com",
    password: "Password1!",
  },
  {
    username: "userTwo",
    email: "usertwo@email.com",
    password: "Password2!",
  },
  {
    username: "userThree",
    email: "userthree@email.com",
    password: "Password3!",
  },
  {
    username: "userFour",
    email: "userfour@email.com",
    password: "Password4!",
  },
  {
    username: "userFive",
    email: "userfive@email.com",
    password: "Password5!",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;