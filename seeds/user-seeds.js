const { User } = require("../models");

const userData = [
  {
    username: "userOne",
    email: "userone@email.com",
    password: "password12345",
  },
  {
    username: "userTwo",
    email: "usertwo@email.com",
    password: "password12345",
  },
  {
    username: "userThree",
    email: "userthree@email.com",
    password: "password12345",
  },
  {
    username: "userFour",
    email: "userfour@email.com",
    password: "password12345",
  },
  {
    username: "userFive",
    email: "userfive@email.com",
    password: "password12345",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
