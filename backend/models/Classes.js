const mongoose = require("mongoose");

const classesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructorName: {
    type: String,
    required: true,
  },
  instructorEmail: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
  status: {
    type: String,
    required: true,
    enum: ["approved", "pending", "rejected"],
  },
  submitted: {
    type: Date,
    required: true,
    default: Date.now,
  },
  totalEnrolled: {
    type: Number,
    default: 0,
  },
  reason: {
    type: String,
    default: null,
  },
});

const Class = mongoose.model("Class", classesSchema);

module.exports = Class;
