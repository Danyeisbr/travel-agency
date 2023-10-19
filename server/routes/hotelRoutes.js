import { Router } from "express";
import Hotel from "../models/Hotel.js";

const router = Router();

router.get("/hotels", async (req, res) => {
  const Hotels = await Hotel.find();
  console.log(Hotels);
  res.send(Hotels);
});

router.post("/hotels", async (req, res) => {
  const {
    hotelName,
    hotelAddress,
    hotelCity,
    hotelZipCode,
    hotelImgUrl,
    hotelDescription,
    hotelActive,
    roomNumbers,
  } = req.body;
  const createHotel = new Hotel({
    hotelName,
    hotelAddress,
    hotelCity,
    hotelZipCode,
    hotelImgUrl,
    hotelDescription,
    hotelActive,
    roomNumbers,
  });
  console.log(createHotel);
  await createHotel.save();

  res.send(createHotel);
});

// Filter hotels by city
router.get("/hotels/city", async (req, res) => {
  try {
    const { hotelCity } = req.query;
    console.log("City parameter:", hotelCity);

    let hotels;
    if (hotelCity) {
      // If 'city' query parameter is provided, filters hotels by that city
      hotels = await Hotel.find({ hotelCity: hotelCity });
      console.log("Filtered hotels:", hotels);
    } else {
      console.log("Param city was not passed")
      // If query parameter is not provided, get all hotels
       //hotels = await Hotel.find();
    }

    res.send(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching hotels' });
  }
});

router.get("/hotels/:id", async (req, res) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.send(getHotel);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/hotels/:id", async (req, res) => {
  try {
    const deleteHotel = await Hotel.findByIdAndDelete(req.params.id);
    return res.json(deleteHotel);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.put("/hotels/:id", async (req, res) => {
  const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(updateHotel);
});

export default router;
