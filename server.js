const express = require("express");
const app = express();

app.use(express.static(".")); // serve frontend files

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

app.listen(80, () => {
  console.log("Server running on port 80");
});
