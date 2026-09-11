/*import {test,expect} from '@playwright/test'
import { LoginPage} from '../pages/loginPage'
import { DashBoardPage} from '../pages/dashboardPage'
import {ExcelUtils} from '../utils/excelutils.spec'
import path from  'node:path'

//file path of excel
const filepath = path.join(__dirname,'..tetdata/loginPage.xlsx')

//take the sheet name of excel file saved

const sheetname = 'LoginData'
let datas:any
try{
    datas = ExcelUtils.getExcelData(filepath,sheetname)
    
}catch(error){

console.log(error);
}
let lp:LoginPage
let dp:DashBoardPage
test.beforeEach(async({page})=>{
    lp = new LoginPage()
    dp = new DashBoardPage()


    
})
for(let products of datas){

    test(`add the item to the cart ${products.}`)
}

*/





