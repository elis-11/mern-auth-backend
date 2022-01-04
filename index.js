const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//set up server

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` :) Server started on port ${PORT}`));

app.use(express.json());

// connect to mongoDB

mongoose.connect(
  process.env.MDB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },

  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);

// set up routes 5:17 

app.use("/auth", require("./routers/userRouter"));