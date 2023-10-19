import dotenv from "dotenv";
import { Router } from "express";
import { Resend } from "resend";
dotenv.config();

const router = Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/email", async (req, res) => {
  try {
    const { emailBody } = req.body;

    // Extract data from emailBody object
    const { reservationData, additionalGuestNames } = emailBody;

    // Customizing the email body using reservationData and additionalGuestNames
    const emailContent = `
        Reservation Details:
        Reservation Number: ${reservationData.reservationNumber}
        Name: ${reservationData.nameGuest} ${reservationData.lastNameGuest}
        Document Type: ${reservationData.documentType}
        ID Number: ${reservationData.idNumberGuest}
        Gender: ${reservationData.genderGuest}
        Email: ${reservationData.emailGuest}
        Phone: ${reservationData.phoneGuest}
        Emergency Contact Name: ${reservationData.emergencyContactName}
        Emergency Contact Phone: ${reservationData.emergencyContactPhone}
        Check-in Date: ${reservationData.checkIn}
        Check-out Date: ${reservationData.checkOut}
        Lodging City: ${reservationData.lodgingCity}
        Hotel Name: ${reservationData.hotelNameReservation}
        Room Number: ${reservationData.roomNumberReservation}
        Reservation Active: ${reservationData.reservationActive}
        Guests: ${additionalGuestNames.join(", ")}
      `;

    // Add line breaks between each data
    const formattedEmailContent = emailContent.replace(/\\n/g, '\n');

    const data = await resend.emails.send({
      from: "Hilton Alliance - Agency Travel <onboarding@resend.dev>",
      to: [reservationData.emailGuest], // Send email to the provided guest email
      subject: "Reservation Confirmation",
      html: `<strong>${formattedEmailContent}</strong>`,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;
