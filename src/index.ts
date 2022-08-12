import { config } from 'dotenv';
import { InternalErrorServer } from './errors';
import { Server } from "./server";


const start = async () => {

    config();

    if (!process.env.URL) throw new Error("URL must be defined");
    if (!process.env.PORT) throw new Error("PORT must be defined");
    if (!process.env.FILE) throw new Error("FILE must be defined");

    try {

        new Server().star().listener(process.env.PORT);

    } catch (error) {
        throw new InternalErrorServer(error)
    }

}

start();