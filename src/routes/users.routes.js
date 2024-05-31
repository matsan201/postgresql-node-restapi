import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get('/users', (req, res) => {
    res.send("Obteniendo usarios")
})

router.get('/users/:id', (req, res) => {
    const {id} =req.params
    res.send("Obteniendo usarios" + id)
})

router.post('/users', (req, res) => {
    res.send("creando usarios")
})

router.delete('/users/:id', (req, res) => {
    const {id} = req.params
    res.send("eliminando usarios")
})

router.put('/users/:id', (req, res) => {
    res.send("actualizando usarios")
})

export default router