const mongoose = require("mongoose");

module.exports.dbConnect = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Error connecting to MongoDB:", err));
  } catch (error) {
    console.log(error.message);
  }
};
