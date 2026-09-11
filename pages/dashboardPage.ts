import { Locator,Page } from "@playwright/test"

export class dashBoardPage{
    page:Page
    products:Locator
    homePageProductPrice:string
    viewPageProductName:Locator
    viewPageProductPrice:Locator
    addToCartMessage:Locator
    cart:Locator


constructor(page:Page){
    this.page = page
    this.products = this.page.locator('div.card-body')
    this.homePageProductPrice=""
    this.viewPageProductName= this.page.locator('.rtl-text h2')
    this.viewPageProductPrice = this.page.locator('.rtl-text h3 ')
    this.addToCartMessage = this.page.locator('#toast-container')
    this.cart = this.page.locator('[routerlink="/dashboard/cart"]')
}
    async viewAndAddProduct(productName:string,index:number){
        await this.products.nth(0).waitFor()
        const countOfProducts = await this.products.count()

        for(let i = 0 ;i <countOfProducts; i++){
           const productText =  await this.products.nth(i).locator('b').textContent()
           console.log(productText);//ADISA
           if(productText?.trim().toLowerCase() === productName.trim().toLowerCase() ){
            this.homePageProductPrice = await this.products.nth(i).locator('.text-muted').innerText()
            console.log(this.homePageProductPrice);
            await this.products.nth(i).locator('button').nth(index).click()
            break

            }
       }

}
}
