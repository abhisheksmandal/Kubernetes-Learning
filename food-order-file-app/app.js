const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const ordersFilePath = "orders.txt";

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/save-order", (req, res) => {
  const { name, order, instructions } = req.body;
  const orderDetails = `Name: ${name}\nOrder: ${order}\nInstructions: ${instructions}\n\n`;
  fs.appendFile(ordersFilePath, orderDetails, (err) => {
    if (err) throw err;
    console.log("Order saved:", name);
    res.redirect("/");
  });
});

app.get("/get-orders", (req, res) => {
  fs.readFile(ordersFilePath, "utf8", (err, data) => {
    if (err) throw err;
    const orders = data.split("\n\n").filter(Boolean);
    res.json({ orders });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
