import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id :{
        type:Number,
        required: true,
      
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    mail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

export default User;
