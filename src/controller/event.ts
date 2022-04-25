import { readFileSync } from 'fs';
import { StrappingUpload } from '../strapping';

export const getNomina = async (req: any, res: any) => {
    try {
        const rawdata = readFileSync(process.env.FILE!);
        const { fechaActualizacion, data } = JSON.parse(rawdata.toString());

        const fechaActual = new Date();

        if (fechaActualizacion.toLocaleString() >= fechaActual.toLocaleString())
            StrappingUpload()

        res.json({
            "actualizacionNominaSII": fechaActualizacion,
            data
        });

    } catch (e) {
        throw new Error(`Error al obtener la nomina: ${e}`)
    }
}