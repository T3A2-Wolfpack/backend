const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {   
        username: {
          type: String,
          required: true,
        },
        connection: {
          type: String,
          required: true,
        },
        client_id: {
            type: String,
        },
        admin: {
          type: Boolean,
        },
        email: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        tenant: {
          type: String,
          required: true,
        },
        transaction: {
          type: Object,
        },
        request_language: {
            type: String,
        },
        email_verified: {
            type: Boolean,
        }
      },
      { timestamps: true }
);



module.exports = mongoose.model("user", userSchema);
