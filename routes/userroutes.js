import { Router  } from "express";
import { creatUser,getAllUsers,updateUser,deleteUser } from '../Controller/user_controller.js'
const router = Router();
router.post("/" , creatUser)
// Get all users
router.get("/", getAllUsers);

// Update user by ID
router.put("/:id", updateUser);

// Delete user by ID
router.delete("/:id", deleteUser);

export default router