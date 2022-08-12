import { Request, Response } from 'express';
import { serviceNomina } from '../services/nomina.services';


export const Seed = async (req: Request, res: Response) => {
    try {

        const service = new serviceNomina();
        const nomina = await service.seed();

        if(nomina.length <= 1)
            res.status(500).json({
                status: 'error',
                msg:'No fue posible obtener la informacion'
            })

        res.status(200).json({
            status: 'OK',
            nomina
        });

    } catch (e) {
        throw new Error(`Error al obtener la nomina: ${e}`)
    }
}