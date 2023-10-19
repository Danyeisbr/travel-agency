import { Router } from "express";
import Reservation from "../models/Reservation.js";

const router = Router();

router.get("/reservations", async (req, res) => {
  const Reservations = await Reservation.find();
  console.log(Reservations);
  res.send(Reservations);
});

router.post("/reservations", async (req, res) => {
  const {
    documentType,
    idNumberGuest,
    nameGuest,
    lastNameGuest,
    genderGuest,
    emailGuest,
    phoneGuest,
    emergencyContactName,
    emergencyContactPhone,
    checkIn,
    checkOut,
    lodgingCity,
    hotelNameReservation,
    roomNumberReservation,
    reservationActive,
    guests,
  } = req.body;
  const createReservation = new Reservation({
    documentType,
    idNumberGuest,
    nameGuest,
    lastNameGuest,
    genderGuest,
    emailGuest,
    phoneGuest,
    emergencyContactName,
    emergencyContactPhone,
    checkIn,
    checkOut,
    lodgingCity,
    hotelNameReservation,
    roomNumberReservation,
    reservationActive,
    guests,
  });
  console.log(createReservation);
  await createReservation.save();
  res.send(createReservation);
});

router.get("/reservations/:id", async (req, res) => {
  try {
    const getReservation = await Reservation.findById(req.params.id);
    res.send(getReservation);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/reservations/:id", async (req, res) => {
  try {
    const deleteReservation = await Reservation.findByIdAndDelete(req.params.id);
    return res.json(deleteReservation);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.put("/reservations/:id", async (req, res) => {
  const updateReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(updateReservation);
});

export default router;
