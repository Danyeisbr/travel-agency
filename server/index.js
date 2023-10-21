import app from './app.js';
import { startConnection } from './database.js';

startConnection();
app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running on port: ' + process.env.PORT);
  if (!process.env.RESEND_API_KEY) {
    console.log(`Error: You need to define RESEND_API_KEY in the .env file.`);
  }
  console.log('Listening on http://localhost:4000');
});