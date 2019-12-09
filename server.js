const express = require('express');
const app = express();
//If no env set, will default to 5000
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API Running');
});

app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});