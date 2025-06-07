    // backend/server.js
    import express from 'express';
    import dotenv from 'dotenv';
    import mongoose from 'mongoose';
    import cors from 'cors';
    import parentRoutes from './parents.js';

    dotenv.config({ path: './config.env' });

    const app = express();
    const PORT = process.env.PORT || 5000;

    // Middleware
    app.use(cors());
    app.use(express.json());

    // DB Connection
    mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
    })
    .catch(err => console.error('❌ DB connection error:', err));

    // Routes
    app.use('/api/parents', parentRoutes);
