import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/routes.js";
import swaggerDocs from "./config/swaggerConfig.js";
import swaggerUi from "swagger-ui-express"; // ✅ Importar swagger-ui-express

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(router);

// ✅ Servir Swagger en una ruta específica
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error conectando a MongoDB:", err));

app.listen(PORT, () =>
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
);
