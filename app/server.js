const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}....`);
});
