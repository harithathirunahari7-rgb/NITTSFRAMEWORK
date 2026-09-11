# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashBoardPageTest.spec.ts >> Add the item to the cart
- Location: tests\dashBoardPageTest.spec.ts:27:6

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - text:    
  - generic [ref=e25]:
    - paragraph [ref=e26]: Home | Search
    - heading "Filters" [level=4] [ref=e28]
    - generic [ref=e29]:
      - textbox "search" [ref=e31]
      - generic [ref=e32]:
        - heading "Price Range" [level=6] [ref=e33]
        - generic [ref=e34]:
          - textbox "Min Price" [ref=e36]
          - textbox "Max Price" [ref=e38]
      - generic [ref=e39]:
        - heading "Categories" [level=6] [ref=e40]
        - generic [ref=e41]: 
        - generic [ref=e43]:
          - checkbox [ref=e44]
          - generic [ref=e45]: fashion
        - generic [ref=e46]:
          - checkbox [ref=e47]
          - generic [ref=e48]: electronics
        - generic [ref=e49]:
          - checkbox [ref=e50]
          - generic [ref=e51]: household
      - generic [ref=e52]:
        - heading "Sub Categories" [level=6] [ref=e53]
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - checkbox [ref=e57]
          - generic [ref=e58]: t-shirts
        - generic [ref=e59]:
          - checkbox [ref=e60]
          - generic [ref=e61]: shirts
        - generic [ref=e62]:
          - checkbox [ref=e63]
          - generic [ref=e64]: shoes
        - generic [ref=e65]:
          - checkbox [ref=e66]
          - generic [ref=e67]: mobiles
        - generic [ref=e68]:
          - checkbox [ref=e69]
          - generic [ref=e70]: laptops
      - generic [ref=e71]:
        - heading "Search For" [level=6] [ref=e72]
        - generic [ref=e73]: 
        - generic [ref=e75]:
          - checkbox [ref=e76]
          - generic [ref=e77]: men
        - generic [ref=e78]:
          - checkbox [ref=e79]
          - generic [ref=e80]: women
  - generic [ref=e81]:
    - generic [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]: Showing 3 results |
        - generic [ref=e85]: User can only see maximum 9 products on a page
      - generic [ref=e86]:
        - generic [ref=e90]:
          - heading "ADIDAS ORIGINAL" [level=5] [ref=e91]
          - generic [ref=e92]: $ 11500
          - button "View" [ref=e94] [cursor=pointer]:
            - generic [ref=e95]: 
            - text: View
          - button " Add To Cart" [ref=e96] [cursor=pointer]:
            - generic [ref=e97]: 
            - text: Add To Cart
        - generic [ref=e101]:
          - heading "ZARA COAT 3" [level=5] [ref=e102]
          - generic [ref=e103]: $ 11500
          - button "View" [ref=e105] [cursor=pointer]:
            - generic [ref=e106]: 
            - text: View
          - button " Add To Cart" [ref=e107] [cursor=pointer]:
            - generic [ref=e108]: 
            - text: Add To Cart
        - generic [ref=e112]:
          - heading "iphone 13 pro" [level=5] [ref=e113]
          - generic [ref=e114]: $ 55000
          - button "View" [ref=e116] [cursor=pointer]:
            - generic [ref=e117]: 
            - text: View
          - button " Add To Cart" [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: 
            - text: Add To Cart
    - list "Pagination" [ref=e124]:
      - listitem [ref=e125]:
        - text: «
        - generic [ref=e126]:
          - text: Previous
          - generic [ref=e127]: page
      - listitem [ref=e128]:
        - generic [ref=e129]: You're on page
        - text: "1"
      - listitem [ref=e130]:
        - generic [ref=e131]:
          - text: Next
          - generic [ref=e132]: page
        - text: »
  - generic [ref=e133]: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | /*
  2  | let name:string ='ahritha'
  3  |  */
  4  | import {test, expect } from "@playwright/test"
  5  |  import { loginPage } from "../pages/loginPage"
  6  |  import { dashBoardPage } from "../pages/dashboardPage"
  7  | 
  8  |  const url = 'https://rahulshettyacademy.com/client/#/auth/login'
  9  |  let email = 'hari15@test.com'
  10 |  let passsword = 'Twenty26!'
  11 |  let errorMessage = 'Incorrect email or password'
  12 |  let invalidPassword = '48783@bjdjj'
  13 |  let productName = 'ADIDAS ORIGINAL'
  14 |  
  15 |  let lp:loginPage
  16 |  let dp:dashBoardPage
> 17 |  test.beforeEach(async({page})=>
     |       ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  18 |  {
  19 |      lp = new loginPage(page)
  20 |      dp = new dashBoardPage(page)
  21 |     await lp.launchURL(url)
  22 |     await lp.loginIntoApplication(email,passsword)
  23 |     await expect(lp.homePageIdentifier).toBeVisible()
  24 | 
  25 |     
  26 |  })
  27 |  test('Add the item to the cart',async()=>{
  28 |     await dp.viewAndAddProduct(productName,1)
  29 |         await expect(dp.addToCartMessage).toHaveText('Product Added To Cart')
  30 |    
  31 | 
  32 |  })
  33 | 
  34 |  test('view item in the cart',async()=>{
  35 |     await dp.viewAndAddProduct(productName,0)
  36 |     await expect(dp.viewPageProductPrice).toHaveText(dp.homePageProductPrice)
  37 |    
  38 | 
  39 | 
  40 |  })
  41 | 
  42 |  
  43 | 
  44 | 
  45 | 
```