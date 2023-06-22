const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const cors = require('cors');
const app = express();
const apiRoutes = require('./Routes/Register');
const leadDetails = require('./Routes/Resourse')
const userRoles = require('./Routes/Roles')
app.use(cors());

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB()
// Mount the API routes
const port = 5000; // Choose a port number

app.use(express.json()); // Parse JSON request bodies

// Mount the API routes
app.use('/api/register', apiRoutes);
app.use('/api/roles', userRoles);
app.use('/api/leadDetail', leadDetails);



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});