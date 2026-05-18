const express = require("express");
const connectDB = require("./dbConfig/db");
const app = express();
const router = require("./routes/index.js");
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api", router);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database: ", err);
  });
