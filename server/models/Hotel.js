import { Schema, model } from "mongoose";

const hotelSchema = new Schema(
  {
    hotelName: {
      type: String,
    },
    hotelAddress: {
      type: String,
    },
    hotelCity: {
      type: String,
    },
    hotelZipCode: {
      type: String,
    },
    hotelImgUrl: {
      type: String,
      trim: true,
    },
    hotelDescription: {
      type: String,
    },
    hotelActive: {
      type: Boolean,
    },
    roomNumbers: [{
      type: String,
      trim: true,
    }],
  },
  {
    versionKey: false,
  }
);

export default model("Hotel", hotelSchema);
