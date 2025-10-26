import dotenv from 'dotenv';
dotenv.config();

const env = {
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',
    PORT: process.env.PORT || 4444
}

export default env;