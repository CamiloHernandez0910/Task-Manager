import { Router } from 'express';
import authRoutes from "./authRoutes.js";
import taskRoutes from "./taskRoutes.js";

const router = Router();

router.use("/api/auth", authRoutes);
router.use("/api/tasks", taskRoutes);

export default router;
