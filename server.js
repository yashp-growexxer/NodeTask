const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const dbconnect = require("./dbConnect");

const app = require("./app");

dbconnect;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
