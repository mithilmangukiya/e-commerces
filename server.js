const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cartRoutes = require('./routes/cartRoutes.js');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = process.env.url;
mongoose
    .connect(MONGO_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Database connection error:', err));

// Routes
app.use('/api/cart', cartRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
