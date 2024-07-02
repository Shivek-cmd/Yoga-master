const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shivek6856:7ERfdI7Lkzs6UlpE@cluster0.tnpfybc.mongodb.net/?appName=Cluster0"
    );
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process with failure
  }
};
module.exports = connectdb;
//7ERfdI7Lkzs6UlpE
//shivek6856
