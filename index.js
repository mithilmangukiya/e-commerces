const express = require('express');
const dotenv = require('dotenv');
const { connectDb } = require('./connection');
const categoryRoutes = require('./Routes/Category_Routes');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api/category", categoryRoutes); // Corrected route prefix

// Connect to MongoDB and then start the server
app.listen(PORT, (req, res) => {
    connectDb();
    console.log(`your server started at port:${PORT}`);
  });