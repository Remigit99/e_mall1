const express = require("express");
const cors = require("cors");

const data = require("./data.js");

// console.log(data);

const app = express();

const PORT = process.env.SERVER_PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
