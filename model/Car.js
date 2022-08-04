const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  image: [String],
  price: Number,
  title: String,
  location: String,
  year: Number,
  mileage: Number,
  transmission: String,
  color: String,
  notes: String,
  owner:{
  type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "User"
},
  make: String,
  model: String
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
