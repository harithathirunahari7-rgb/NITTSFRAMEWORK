# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.ts >> dummyjson/todos
- Location: tests\api.spec.ts:115:5

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  24  | })
  25  | //post 201
  26  | test('post response', async ({request}) => {
  27  |     const response = await request.post('https://reqres.in/api/users',
  28  |         {
  29  |             headers: {
  30  |                 'KEY': ` ${API_KEY}`
  31  |             },
  32  |             data: {
  33  |                 'name': 'morpheus',
  34  |                 'job': 'leader',
  35  |                 'company': 'XYZ',
  36  |             }
  37  |         }
  38  |     )
  39  | 
  40  |     const jsonResponse = await response.json()
  41  |     console.log(jsonResponse)
  42  |     expect(response.status()).toBe(201)
  43  | })
  44  | //put
  45  | test('put response', async ({request}) => {
  46  |     const response = await request.put('https://reqres.in/api/users/2',
  47  |         {
  48  |             headers: {
  49  |                 'KEY': ` ${API_KEY}`
  50  |             },
  51  |             data: {
  52  |                 'name': 'morpheus',
  53  |                 'job': 'QE',
  54  |                 'company': 'NIT',
  55  |             }
  56  |         }
  57  |     )
  58  | 
  59  |     const jsonResponse = await response.json()
  60  |     console.log(jsonResponse)
  61  |     console.log('PUT response status:'+response.status())//200
  62  |     //expect(response.status()).toBe(200)
  63  | })
  64  | //delete -204
  65  | test('delete response', async ({request}) => {
  66  |     const response = await request.delete('https://reqres.in/api/users/2',
  67  |         {
  68  |             headers: {
  69  |                 'KEY': ` ${API_KEY}`
  70  |             }
  71  |         }
  72  |     )
  73  | 
  74  |     console.log('DELETE response status:'+response.status())//204
  75  |     expect(response.status()).toBe(204)
  76  | })
  77  | 
  78  | test('https://dummyjson.com/todos get request',async({request})=>{
  79  |     const response = await request.get('https://dummyjson.com/todos',{
  80  | 
  81  |     })
  82  |   const body = await response.json()
  83  |   console.log(body);
  84  |   //console.log(response.headers());
  85  |   await expect(body.todos[0].id).toBe(1)
  86  | 
  87  |  // All IDs:
  88  | const ids = body.todos.map((item: any) => item.id);
  89  | expect(ids.length).toBeGreaterThan(0)
  90  | expect(ids).toContain(10)
  91  | console.log(ids);
  92  | //Find specific ID:
  93  | body.todos.find((item: any) => item.id === 10)
  94  | })
  95  | 
  96  | test('dummyjson.com/todos post request',async({request})=> {
  97  |     const response = await request.post('https://dummyjson.com/todos/add',
  98  |     {
  99  |     data:{
  100 |         todo: 'Pay the bills', //id is created by the API
  101 |         completed: true, 
  102 |         userId: 143 }
  103 | 
  104 |     })
  105 |     const body = await response.json()
  106 |   // const idtobe =  body.todos.find((item:any) =>item.id === 31)
  107 |    //console.log(idtobe);
  108 |    console.log(body);
  109 |     //console.log(response.status());
  110 | console.log(response.headers()['content-type']);
  111 | console.log(await response.text());
  112 | expect(response.status()).toBe(201)
  113 | })
  114 | 
  115 | test('dummyjson/todos',async({request})=>{
  116 |     const response = await request.patch('https://dummyjson.com/todos/update/255',{
  117 |        data: {
  118 |          todo: 'Play golf', //id is created by the API
  119 |         completed: true, 
  120 |         userId: 243
  121 |             
  122 |         }
  123 |     })
> 124 |     const body = await response.json()
      |                  ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  125 |     console.log(response.status());
  126 | })
  127 | 
```