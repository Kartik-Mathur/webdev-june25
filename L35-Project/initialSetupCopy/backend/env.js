import dotenv from 'dotenv';
dotenv.config();

const env = {
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',
    PORT: process.env.PORT || 4444,
    JWT_SECRET: process.env.JWT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL
}

export default env;