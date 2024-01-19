import Note from '../models/notes.js'

export async function getAllNotes(req, res) {
  try {
    const notasDB = await Note.find();
    res.json({
      status: 'success',
      data: notasDB,
    })
  } catch (err) {
    console.log('erro al traer todas las notas', err)
    res.status(500).json({
      status: 'error',
      message: 'error al obtener todas las notas'
    })
  }
}


// Creando la Nota en la Base de DATOS
// esto es como tal la logica de negocios necesaria para poder hacer todo lo que necesitemos, aqui es donde nos efocamos como programadores
// para resolver esto, porque esto esta en funcion a rrequerimientos y con base de datos relacionales mucho mas 
export async function createNote(req, res) { 

  try {
    const {title, content} = req.body;
    const currenDate = new Date().toISOString();

    // creando un objeto nota para poder agregarle la fecha de cracion y tambien algunas validacion si se requiere
    const newNote = new Note({
      title,
      content,
      date: currenDate,
    });
    // guardando la data en la base de datos 
    await newNote.save();
    res.json({
      status: 'success',
      message: 'nota creada exitosamente',
      data: newNote,
    })
    
  } catch (err) {
    console.log('consologeo erro al crear la nota', err)
    res.status(500).json({
      status: 'error',
      message: 'error al crear la nota desde el server'
    })
  }

}

