import express from 'express';
import cors from 'cors';
import api from './api/index.js';
import conectDB from './base/mongo.js';

const app = express();
const port = 3500;

// habilitacion CORS para permitir solicitudes desde cualquier origen 
app.use(cors())

// Midleware para interpetrar el cuerpo de la solitud en json y no salga el req.body como indefined
app.use(express.json())

app.use('/api', api)

conectDB().then(() => console.log('conexion lista'))

app.listen(port, () => {
  console.log(`server listen in port ${port}`);
})

