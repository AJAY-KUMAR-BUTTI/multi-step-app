const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    maxLength: 200,
  },
  images: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  base_price: {
    type: Number,
    required: true,
  },
  allow_instant_bookin: {
    type: Number,
  },
  price_per_each_additional_guests: {
    type: Number,
  },
  minimum_numberOf_hours_per_reservation: {
    type: Number,
  },
  maximum_numberOf_hours_per_reservation: {
    type: Number,
  },
  appointmentDuration: {
    type: String,
  },
  time_between_appointment: {
    type: String,
  },
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
