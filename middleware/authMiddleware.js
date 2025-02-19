import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
  let token = req.header("Authorization");
  
  if (!token) return res.status(401).json({ error: "Acceso denegado" });

  try {
    // Si el token no tiene "Bearer ", lo añadimos
    if (!token.startsWith("Bearer ")) {
      token = "Bearer " + token;
    }

    const tokenWithoutBearer = token.replace("Bearer ", ""); // Remover "Bearer "
    const verified = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: "Token inválido" });
  }
};


export default authMiddleware;
