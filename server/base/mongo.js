import mongoose from 'mongoose'

const uri = 'mongodb+srv://san05guevara:5FIB404IGueIftf9@cluster0.vp33uob.mongodb.net/'
  
function conectDB() {
  return mongoose.connect(uri)
  .then(() => {
    console.log('se hizo la conexion a la base de datos MONGO')
  })
  .catch( err => {
    console.log(`error al conectarse a mongo`, err)
  })
}

export default conectDB;