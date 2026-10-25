const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'gen-ai-db' 
        });
        console.log("Database Connected Successfully!");
    } catch (error) {
        console.error("Database connection error: ", error);
        process.exit(1);
    }
};

module.exports = connectDB;
