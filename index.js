const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');
const e = require('express');
const PORT = process.env.PORT || 5000;
const orderRoutes = require('./Routes/orderRoutes');




dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
