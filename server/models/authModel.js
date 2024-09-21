const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
        },


        password: {
            type: String,
            required: true,
        },


        token: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("auth", authSchema);