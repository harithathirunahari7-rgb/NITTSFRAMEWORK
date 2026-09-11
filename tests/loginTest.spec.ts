/*
let name:string ='ahritha'
 */
import {test, expect } from "@playwright/test"
 import { loginPage } from "../pages/loginPage"

 const url = 'https://rahulshettyacademy.com/client/#/auth/login'
 let email = 'hari15@test.com'
 let passsword = 'Twenty26!'
 let errorMessage = 'Incorrect email or password'
 let invalidPassword = '48783@bjdjj'

 test('Login using valid credentials',async({page})=>{
    const pageUrl = new loginPage(page)
    await pageUrl.launchURL(url)
    await pageUrl.loginIntoApplication(email,passsword)
    await expect(pageUrl.homePageIdentifier).toBeVisible()



 })

 test('Login using wrong password',async({page})=>{
    const pageUrl = new loginPage(page)
    await pageUrl.launchURL(url)
    await pageUrl.loginIntoApplication(email,invalidPassword)
    await expect(pageUrl.errorMessage).toBeVisible()


 })


