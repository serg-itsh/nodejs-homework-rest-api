const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// const bcrypt = require("bcryptjs");

// const hashPassword = async (password) => {
//   const result = await bcrypt.hash(password, 10);
//   console.log(result);
//   const compare1 = await bcrypt.compare("123456", result);
//   console.log(compare1);
//   const compare2 = await bcrypt.compare("123457", result);
//   console.log(compare2);
// };

// hashPassword("123456");

const authRouter = require("./routes/api/auth"); //
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter); //
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
