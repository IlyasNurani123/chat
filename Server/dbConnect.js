const mongoose = require('mongoose');

 const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = ConnectDb;