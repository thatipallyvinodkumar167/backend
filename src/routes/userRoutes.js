import express from "express";
import { create, getUsers, getUserById, updateUserPut, deleteUserById } from "../controllers/userController.js";

const router = express.Router();

router.post("/create", create);          // POST /api/user/create
router.get("/", getUsers);               // GET /api/user/
router.get("/:id", getUserById);         // GET /api/user/:id
router.put("/update/:id", updateUserPut); // PUT /api/user/update/:id
router.delete("/:id", deleteUserById);   // DELETE /api/user/:id

export default router;
