require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");

// DB connection

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

// Middleware

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// My Routes

app.use("/api", authRoutes);

// PORT

const port = process.env.PORT || 8000;

// Starting a Server

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
