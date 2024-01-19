import { Router } from "express";
import { createNote, getAllNotes } from "../../controllers/notes.js";

const notes = Router()

// Metodo para visualizar todas las notas 
notes.get('/', getAllNotes);
notes.post('/', createNote)

export default notes;