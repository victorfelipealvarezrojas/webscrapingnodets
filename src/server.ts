import express from "express";
import { ruta_nomina } from "./routes/nomina.routes";
const cors = require('cors');

export class Server {

    private app: any;

    constructor() {
        this.star();
    }

    star() {

        this.app = express();
        this.app.use(cors({ origin: true }))
        this.app.use(express.json());

        this.app.use('/api', ruta_nomina);

        return this;
    }

    listener(port: string) {
        this.app.listen(port, () => {
            console.info(`port:: ${port}`);
        });
    }


}