const express=require("express");
require("dotenv").config();
const userRouters=require("./routers/userRouters");
const { connection } = require("./config/db");

const app=express();
app.use(express.json())
//connection to db
connection()
//routes
app.use("/users",userRouters);
app.get("/", (req, res) => {
    res.status(201).send({ msg: "its working" });
  });

  const port = 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  