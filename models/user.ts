import mongoose, { Schema } from "mongoose";

const modelName = "User";

const existingUserModel = mongoose.models[modelName];

const User =
  existingUserModel ||
  mongoose.model(
    modelName,
    new Schema(
      {
        email: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        repeatedPassword: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
    )
  );

export default User;
