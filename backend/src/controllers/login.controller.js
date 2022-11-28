import Login from "../models/Login";
import bycript from "bcrypt";

export const signUpUser = async (req, res) => {
  bycript.hash(req.body.password, 10);
  const { email } = req.body.email;
  const { password } = hashedPassword;
  const newAccount = new Login({ email, password });
  await newAccount.save();
  res.json({ message: "Account created!!" });
};