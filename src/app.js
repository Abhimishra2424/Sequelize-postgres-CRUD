const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const User = require("./models/User");

const port = 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.post("/users", async (req, res) => {
  try {
    const { first_name, last_name } = req.body;
    const user = await User.create({ first_name, last_name });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.log(error);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name } = req.body;
    const user = await User.update(
      { first_name, last_name },
      {
        where: { id },
      }
    );
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.destroy({
      where: {
        id,
      },
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
