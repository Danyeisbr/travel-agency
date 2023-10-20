import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import hotelRoutes from "./routes/hotelRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";
import resendEmail from "./routes/resendEmail.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

//app.use(cors());
app.use(cors({
    origin: "https://travel-app.azurewebsites.net",
    credentials: true, 
  }));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);        
app.use("/api", hotelRoutes);       
app.use("/api", roomRoutes);
app.use("/api", reservationRoutes);
app.use("/api", resendEmail);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

export default app;
