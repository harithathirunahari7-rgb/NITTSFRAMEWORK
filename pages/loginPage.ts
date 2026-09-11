//centalized locator for page n methods (can say it as datatypes n methods )
import {Locator, Page} from '@playwright/test'
export class loginPage{
page:Page
email:Locator
password:Locator
errorMessage:Locator
homePageIdentifier:Locator
loginBtn:Locator


constructor(page:Page){
    this.page = page
    this.email = this.page.getByPlaceholder('email@example.com')
    this.password = this.page.getByPlaceholder('enter your passsword')
    this.loginBtn = this.page.locator('#login')
    this.errorMessage= this.page.locator('#toast-container')
    this.homePageIdentifier = this.page.locator('[routerlink="/dashboard"]')
    
}

async launchURL(url:string){
    await this.page.goto(url)
}

async loginIntoApplication(emailValue:string, passwordValue:string){
    await this.email.fill(emailValue)
    await this.password.fill(passwordValue)
    await this.loginBtn.click()

}




}