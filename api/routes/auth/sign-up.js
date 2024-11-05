import Joi from "joi";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

// Génère le JWT
const generateToken = (id) => {
  console.log("Génération du token pour l'ID :", id);
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export default asyncHandler(async (req, res) => {
    const { body } = req;
    const schema = Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });
    const { value, error } = schema.validate(body);

    if (error) {
      throw error;
    }

    const { email, password } = value;
    const userModel = req.scope.resolve("userModel");

    if (!email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    // Vérifie si l'utilisateur existe déjà
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    // Hash du mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Création de l'utilisateur
    const user = await userModel.create({
      email,
      password: hashedPassword,
    });

    if (user) {
      const token = generateToken(user._id);
      console.log("Token généré :", token);
      console.log("Utilisateur créé avec succès :", user);
      res.status(201).json({
        _id: user.id,
        email: user.email,
        token: token, // Ajout du jeton ici
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
});
