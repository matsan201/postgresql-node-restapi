import { Router } from "express";
import { pool } from "../db.js";
import { getUsers, getUsersById, createUser, deleteUsers, updateUsers } from "../controllers/users.controllers.js";

const router = Router();

router.get('/users', getUsers)
router.get('/users/:id', getUsersById)
router.post('/users', createUser)
router.delete('/users/:id', deleteUsers)
router.put('/users/:id', updateUsers)

export default router