const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

//Connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser.json())
 
app.use(cors());
//Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.port || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
