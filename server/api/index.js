import { Router } from "express";
import notes from "./notes/index.js";

const api = Router()

// ruta de notas
api.use('/notes', notes)

export default api