import { CustomError } from "./custom.error";

export class InternalErrorServer extends CustomError {
    statusCode: number = 500;
    reason: string = "Internal Erro Server";

    constructor(msg: unknown) {
        super(`Internal Serer Error:: ${msg} `);
        //lo hago xq estoy extendiendo de otra clase
        Object.setPrototypeOf(this, InternalErrorServer.prototype);//solo xq extiendo de una clase incorporada
    }

    serializeErrors() {
        return [{
            message: this.reason
        }]
    }
}