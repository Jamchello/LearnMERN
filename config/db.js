const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

//When using async/await, make sure to use a try/catch block.
//Use the await keyword where promise returned
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.log(err.message);
    //Exit process with failure.
    process.exit(1);
  }
};

module.exports = connectDB;
