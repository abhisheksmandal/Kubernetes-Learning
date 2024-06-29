const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

const mongoHost = process.env.MONGO_HOST || "localhost";
const mongoPort = process.env.MONGO_PORT || "27017";

// Connect to MongoDB
mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/yourDatabaseName`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose model
const Email = mongoose.model("Email", {
  email: String,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/add-email", async (req, res) => {
  const { email } = req.body;
  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Error adding email");
  }
});

app.get("/emails", async (req, res) => {
  try {
    const emails = await Email.find({});
    res.json(emails);
  } catch (error) {
    res.status(500).send("Error fetching emails");
  }
});

app.post("/delete-email", async (req, res) => {
  const { email } = req.body;
  try {
    await Email.findOneAndDelete({ email });
    res.status(200).send("Email deleted");
  } catch (error) {
    res.status(500).send("Error deleting email");
  }
});

app.get("/exit", (req, res) => {
  res.send("Server stopped");
  process.exit(0); // This stops the server (not recommended in production)
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
