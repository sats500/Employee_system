const express = require('express');
const mongoose = require('mongoose');
const createEmployeeRouter = require('./routes/createEmployee');
const searchEmployeeRouter = require('./routes/searchEmployee');

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURl=process.env.MONGODB_URL || "mongodb://localhost:27017/Employee_data"

// MongoDB Connection
mongoose.connect(mongoURl,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Use the createemployee and searchemployee routes
app.use('/createEmployee', createEmployeeRouter);
app.use('/searchEmployee', searchEmployeeRouter);

// Other routes and middleware configurations can be added here

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
