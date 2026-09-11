import {test, expect} from '@playwright/test'
import { loginPage } from '../pages/loginPage'
import { dashBoardPage } from '../pages/dashboardPage'
import product  from '../testdata/product.json'

for(const p of product){
      
    test.describe(`test login`,()=>{
       
      let lp:loginPage
      let dp:dashBoardPage
    test.beforeEach(async({page})=>{
        lp = new loginPage(page)
        dp = new dashBoardPage(page)

       await lp.launchURL(p.url)
       await lp.loginIntoApplication(p.email,p.passsword)
        
})

    test(`add product ${p.productName} to the cart`,async()=>{
        await dp.viewAndAddProduct(p.productName,1)
        //await expect(dp.addToCartMessage).toBeVisible()
        await  expect(dp.addToCartMessage).toContainText(p.sucessMessage,{ignoreCase:true})

    })

    test(`view the product ${p.productName}`,async()=>{

        await dp.viewAndAddProduct(p.productName,0)
        await expect(dp.viewPageProductPrice).toBeVisible()
        })

})
}



