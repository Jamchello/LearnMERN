const express = require('express');
const connectDB = require('./config/db');

//Instantiate app
const app = express();
//Connect to DB
connectDB();

//Init middleware
//Allows us to parse json data from requests
app.use(express.json({ extended: false }));
//If no env set, will default to 5000
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API Running');
});

//Defining routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});
