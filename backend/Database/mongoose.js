const mongoose = require("mongoose");
const mongoURL = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGO_INITDB_DATABASE}${process.env.DB_OPTIONS}`;

const connectDB = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(mongoURL, {})
            .then(() => {
                console.log(`MongoDb connection successfully established !!`);
                resolve(true);
            })
            .catch(error => {
                console.error(`MongoDb error connecting to : `, error);
                reject(error);
            });
    });
};

module.exports = connectDB;
