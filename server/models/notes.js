import mongoose from "mongoose";

// Definicion de Esquema para Notes
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  } 
});

// Creacion del Modelo Notes a partir del Esquema
const Note = mongoose.model('Note', noteSchema );

export default Note

