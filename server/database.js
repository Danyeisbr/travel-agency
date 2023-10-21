import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongodbUri = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/travel-agency';

export const startConnection = async () => {
    try {
        const db = await connect(mongodbUri);
        console.log('Connected to DB ' + db.connection.name);
    } catch (error) {
        console.log("Error connecting to the DB: " + error);
    }
}
