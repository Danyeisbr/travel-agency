import { Router } from "express";
import Room from "../models/Room.js";

const router = Router();

router.get("/rooms", async (req, res) => {
  const rooms = await Room.find();
  console.log(rooms);
  res.send(rooms);
});

router.post("/rooms", async (req, res) => {
  const {
    roomNumber,
    roomType,
    roomImgUrl,
    roomDescription,
    roomBasePrice,
    roomTax,
    roomActive,
    hotelName,
  } = req.body;
  const createRoom = new Room({
    roomNumber,
    roomType,
    roomImgUrl,
    roomDescription,
    roomBasePrice,
    roomTax,
    roomActive,
    hotelName,
  });
  await createRoom.save();
  res.send(createRoom);
});

router.get("/rooms/:id", async (req, res) => {
  try {
    const getRoom = await Room.findById(req.params.id);
    //if (!getRoom) return res.status(404).json({ message: "room not found" });
    res.send(getRoom);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/rooms/:id", async (req, res) => {
  try {
    const deleteRoom = await Room.findByIdAndDelete(req.params.id);
    return res.json(deleteRoom);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.put("/rooms/:id", async (req, res) => {
  const updateRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(updateRoom);
});

export default router;
