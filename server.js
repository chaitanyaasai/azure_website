const express = require("express");
const app = express();

// Middleware to read JSON
app.use(express.json());

// Serve frontend
// app.use(express.static("."));
app.use(express.static(__dirname));

// API to receive form data
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Contact:");
  console.log(name, email, message);

  res.json({ status: "Message received ✅" });
});

// Test route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

app.listen(80, () => console.log("Server running"));
