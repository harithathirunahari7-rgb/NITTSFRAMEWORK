//only excel utils logic must be present

import { readFile } from 'node:fs'
import xlsx from 'xlsx'

export class ExcelUtils{

 static getExcelData(filepath:string, sheetname:string){

    try{
        //read file that is presnet inside the excel

        const wb = xlsx.readFile(filepath)
       const sheet =  wb.Sheets[sheetname]

       //convert the sheet to json
       const data = xlsx.utils.sheet_to_json(sheet)
       return data
    }
    catch(error)
    {
        console.log(error)
    }

    }
}
