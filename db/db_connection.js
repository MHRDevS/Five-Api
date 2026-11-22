const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://syedmusab742_db_user:LzjrI8qqqEuiphrb@cluster0.z6wnha6.mongodb.net/');
        console.log("MongoDB Atlas Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Failed: ", error);
        process.exit(1);
    }
};

module.exports = connectDB;