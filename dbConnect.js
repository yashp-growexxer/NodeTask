const mongoose = require("mongoose");

const DB = process.env.DATABASE;
const dbConnect = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log(err, "No connection");
  });

module.export = dbConnect;