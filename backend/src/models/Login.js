import { Schema, model } from "mongoose";

const loginSchema = new Schema({
  email: {
    type: String,
    required: [true, "ingresa un email por favor"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Ingresa una contraseña"],
    unique: false,
  },
});

export default model("Login", loginSchema);