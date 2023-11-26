import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export default asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const userModel = req.scope.resolve("userModel")
  
    if (!email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }
  
    // Check for user email
    const user = await userModel.findOne({ email });
  
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid credentials");
    }
  });