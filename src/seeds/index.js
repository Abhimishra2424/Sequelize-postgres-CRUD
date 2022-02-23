const seedUser = require("./user-seeds");

const sequelize = require("../config/connection");

// Helper function for creating a user.

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedUser();
  } catch (error) {
    console.log(error);
  }
};

seedAll();
