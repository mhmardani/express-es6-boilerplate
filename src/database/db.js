import mongoose from 'mongoose';
import env from './../env';
import autoIncrement from "mongoose-auto-increment";

mongoose.connect(env.DB_URL, {useMongoClient: true});

autoIncrement.initialize(mongoose.connection);

// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + env.DB_URL);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

export default mongoose;