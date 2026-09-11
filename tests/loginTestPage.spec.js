import {test, expect } from "@playwright/test"
 import { loginPage } from "../pages/loginPage"
 import data from '../testdata/testData.json'

 let  pageUrl
 test.beforeEach(async({page})=>{
     pageUrl = new loginPage(page)
     await pageUrl.launchURL(data.url)

 })

 test('Login using valid credentials',async({page})=>{
     
     await pageUrl.loginIntoApplication(data.email,data.passsword)
     await expect(pageUrl.homePageIdentifier).toBeVisible()
 
 
 
  })
  test('Login using wrong password',async({page})=>{
      
      await pageUrl.loginIntoApplication(data.email,data.invalidPassword)
      await expect(pageUrl.errorMessage).toBeVisible()
  
  
   })