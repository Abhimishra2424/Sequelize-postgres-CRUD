const { User } = require("../models");

const usersData = [
  {
    first_name: "John",
    last_name: "Doe",
  },
  {
    first_name: "sac",
    last_name: "sac",
  },
  {
    first_name: "abhi",
    last_name: "mishra",
  },
];

// Seed Users
const seedUser = () => User.bulkCreate(usersData);

module.exports = seedUser;
