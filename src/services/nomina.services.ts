import { INominaService } from './nomina.interface';
import { connect, disconnect } from '../database';
import { InternalErrorServer } from '../errors';
import { Strappingggg } from '../helpers';
import NominaModel from '../model/nomina.model';

export class serviceNomina implements INominaService {

    async seed() {

        const { data } = await Strappingggg(process.env.URL!);

        try {

            await connect();

            await NominaModel.deleteMany();
            const result = await NominaModel.insertMany(data)
            await disconnect();
                
            return result;

        } catch (error) {
            throw new InternalErrorServer(error)
        }
    }

    get<T>(): Promise<T> {
        throw new Error('Method not implemented.');
    }

    getQuery<T>(query: string): Promise<T> {
        throw new Error('Method not implemented.');
    }



}