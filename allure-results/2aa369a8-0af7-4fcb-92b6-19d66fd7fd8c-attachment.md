# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashBoardTestJson.spec.ts >> test login >> add product iphone 13 pro  to the cart
- Location: tests\dashBoardTestJson.spec.ts:21:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://rahulshettyacademy.com/client/#/auth/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]
          - button "Login" [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e49]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e59]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e70]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | //centalized locator for page n methods (can say it as datatypes n methods )
  2  | import {Locator, Page} from '@playwright/test'
  3  | export class loginPage{
  4  | page:Page
  5  | email:Locator
  6  | password:Locator
  7  | errorMessage:Locator
  8  | homePageIdentifier:Locator
  9  | loginBtn:Locator
  10 | 
  11 | 
  12 | constructor(page:Page){
  13 |     this.page = page
  14 |     this.email = this.page.getByPlaceholder('email@example.com')
  15 |     this.password = this.page.getByPlaceholder('enter your passsword')
  16 |     this.loginBtn = this.page.locator('#login')
  17 |     this.errorMessage= this.page.locator('#toast-container')
  18 |     this.homePageIdentifier = this.page.locator('[routerlink="/dashboard"]')
  19 |     
  20 | }
  21 | 
  22 | async launchURL(url:string){
> 23 |     await this.page.goto(url)
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  24 | }
  25 | 
  26 | async loginIntoApplication(emailValue:string, passwordValue:string){
  27 |     await this.email.fill(emailValue)
  28 |     await this.password.fill(passwordValue)
  29 |     await this.loginBtn.click()
  30 | 
  31 | }
  32 | 
  33 | 
  34 | 
  35 | 
  36 | }
```