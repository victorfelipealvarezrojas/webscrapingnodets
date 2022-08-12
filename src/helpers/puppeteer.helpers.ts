import puppeteer from 'puppeteer';



export const Strappingggg = async (URL: string) => {
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

            let values: any[] = [];
            for (var j = 0; j < objCells.length; j++) {
                let text = objCells.item(j).innerHTML;
                values.push(text);
            }

            //RECORDATORIO PARA EL FIN: refactorizar y cargar dentro del values de tipo IProps[] al iterar objCells
            const d: any = {
                //id: i,
                razonSocial: values[1],
                pais: values[2],
                incripcion: values[3],
                //actualizacion: values[5],
                estado: values[6]
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



 




