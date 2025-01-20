const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/mongoDB");
const userRoutes = require("./routes/userRoute");
const roleRoutes = require("./routes/roleRoutes");
const passwordRoutes = require("./routes/passwordRoutes");
require('dotenv').config();

const app = express();
const PORT = 5000;


connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(cookieParser());
app.set('view engine', 'ejs'); 
app.set('views', './views'); 


app.use('/api/user', userRoutes);
app.use('/api/role', roleRoutes);
app.use('/api/auth', passwordRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
