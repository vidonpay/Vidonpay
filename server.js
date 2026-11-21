const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("VidonPay backend is running 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "VidonPay API is healthy"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`VidonPay server running on port ${PORT}`);
});
