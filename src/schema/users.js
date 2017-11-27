import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import autoIncrement from "mongoose-auto-increment";

const usersSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            index: true,
            unique: true,
            required: true
        },
    }
);

usersSchema.plugin(uniqueValidator);
usersSchema.plugin(autoIncrement.plugin, 'id');

export default usersSchema;
