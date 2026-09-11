/*
let name:string ='ahritha'
 */
import {test, expect } from "@playwright/test"
 import { loginPage } from "../pages/loginPage"
 import { dashBoardPage } from "../pages/dashboardPage"

 const url = 'https://rahulshettyacademy.com/client/#/auth/login'
 let email = 'hari15@test.com'
 let passsword = 'Twenty26!'
 let errorMessage = 'Incorrect email or password'
 let invalidPassword = '48783@bjdjj'
 let productName = 'ADIDAS ORIGINAL'
 
 let lp:loginPage
 let dp:dashBoardPage
 test.beforeEach(async({page})=>
 {
     lp = new loginPage(page)
     dp = new dashBoardPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(email,passsword)
    await expect(lp.homePageIdentifier).toBeVisible()

    
 })
 test('Add the item to the cart',async()=>{
    await dp.viewAndAddProduct(productName,1)
        await expect(dp.addToCartMessage).toHaveText('Product Added To Cart')
   

 })

 test('view item in the cart',async()=>{
    await dp.viewAndAddProduct(productName,0)
    await expect(dp.viewPageProductPrice).toHaveText(dp.homePageProductPrice)
   


 })

 


