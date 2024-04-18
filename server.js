// step 1
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");

// middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// connecting with database
mongoose
  .connect("mongodb://localhost:27017/AnuragSingh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB ");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
// creating user Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

//

//Implement route handlers
app.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = {
      username,
      email,
      password,
    };
    await User.insertMany(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Running Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// http://localhost:3000/users
