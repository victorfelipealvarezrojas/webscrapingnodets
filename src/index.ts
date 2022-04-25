import express from "express";
import { nomina } from "./routes/event";
import { Strapping } from "./strapping";
import { writeFileSync } from 'fs';

require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }))
app.use(express.json());

app.use('/api', nomina);

if (!process.env.URL)  throw new Error("URL no definida");
if (!process.env.PORT) throw new Error("PORT no definido");
if (!process.env.FILE) throw new Error("FILE no definido");

Strapping(process.env.URL).then(result => {
    writeFileSync(process.env.FILE!, JSON.stringify(result), 'utf-8');
}).catch(e => {
    throw new Error(`Error interno de servidor: ${e}`);
});

app.listen(process.env.PORT, () => {
    console.info(`Servidor corriendo en puerto ${process.env.PORT}`);
});
