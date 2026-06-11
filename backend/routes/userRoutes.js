import express from "express";
import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { verifyAuth, verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyAuth, verifyAdmin, getAllUsers);
router.get("/:id", verifyAuth, getSingleUser);
router.put("/:id", verifyAuth, updateUser);
router.delete("/:id", verifyAuth, verifyAdmin, deleteUser);

export default router;
