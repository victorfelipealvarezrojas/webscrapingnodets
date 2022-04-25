import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';

export interface IProps {
    id: number;
    rezonSocial: any;
    pais: any;
    incripcion: any;
    ultimaActualizacion: any;
    estado: any;
}

export const Strapping = async (URL: string) => {
    let i = 0;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL);

    const rawData = await page.evaluate(() => {
        const data = [];
        const table: any = document.getElementById("tabledatasii");
        const fechaActualizacion =document.getElementById("fechaActualizacion")?.textContent?.split(":")[1].trim();

        for (var i = 1; i < table.rows.length; i++) {
            const objCells = table.rows.item(i).cells;

            let values: IProps[] = [];
            for (var j = 0; j < objCells.length; j++) {
                let text = objCells.item(j).innerHTML;
                values.push(text);
            }

            //RECORDATORIO PARA EL FIN: refactorizar y cargar dentro del values de tipo IProps[] al iterar objCells
            const d: IProps = {
                id: i,
                rezonSocial: values[1],
                pais: values[2],
                incripcion: values[3],
                ultimaActualizacion: values[4],
                estado: values[5]
            };

            data.push(d);
        }

        return { 
            fechaActualizacion,
            data 
        };
    });

    await browser.close();

    return rawData;
};


export const StrappingUpload = () => {
    Strapping(process.env.URL!).then(result => {
        writeFileSync(process.env.FILE!, JSON.stringify(result), 'utf-8');
        console.log(result)
    }).catch(e => {
        throw new Error(`Error interno de servidor: ${e}`);
    });
}


