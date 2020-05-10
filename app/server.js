const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}....`);
});
