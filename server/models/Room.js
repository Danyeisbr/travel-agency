import { Schema, model } from "mongoose";

const roomSchema = new Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      trim: true,
    },
    roomType: {
      type: String,
    },
    roomImgUrl: {
      type: String,
      trim: true,
    },
    roomDescription: {
      type: String,
    },
    roomBasePrice: {
      type: String,
    },
    roomTax: {
      type: String,
    },
    roomActive: {
      type: Boolean,
    },
    hotelName: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Room", roomSchema);
