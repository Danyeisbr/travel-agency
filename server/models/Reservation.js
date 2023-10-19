import { Schema, model } from "mongoose";

const reservationSchema = new Schema(
  {
    reservationNumber: {
      type: Number,
    },
    documentType: {
      type: String,
      trim: true,
    },
    idNumberGuest: {
      type: Number,
      trim: true,
    },
    nameGuest: {
      type: String,
      trim: true,
    },
    lastNameGuest: {
      type: String,
      trim: true,
    },
    genderGuest: {
      type: String,
    },
    emailGuest: {
      type: String,
    },
    phoneGuest: {
      type: String,
    },
    emergencyContactName: {
      type: String,
    },
    emergencyContactPhone: {
      type: String,
    },
    checkIn: {
      type: Date,
    },
    checkOut: {
      type: Date,
    },
    lodgingCity: {
      type: String,
    },
    hotelNameReservation: {
      type: String,
    },
    roomNumberReservation: {
      type: String,
      trim: true,
    },
    guests: [{
      type: String,
      trim: true,
    }],
    reservationActive: {
      type: Boolean,
    },
  },
  {
    versionKey: false,
  }
);

// Pre-hook to generate a 2 or 3 digit random number before saving the reservation
reservationSchema.pre("save", function(next) {
  // Generate a random number from 1 to 100
  this.reservationNumber = Math.floor(Math.random() * 100) + 1;
  next();
});

export default model("Reservation", reservationSchema);