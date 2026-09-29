# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.ts >> dummyjson.com/todos post request
- Location: tests\api.spec.ts:96:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'find')
```

# Test source

```ts
  7   |         {
  8   |             headers: {
  9   |                 'KEY': ` ${API_KEY}`
  10  |             }
  11  |         }
  12  |     )
  13  | 
  14  | expect(response.status()).toBe(200)
  15  | const contentType = response.headers()['content-type']
  16  | const headers =  response.headers()
  17  | expect(headers['content-type']).toContain('application/json; charset=utf-8')
  18  | const jsonResponse = await response.json()
  19  |  console.log(headers);
  20  |  console.log(contentType);
  21  |  console.log(jsonResponse)
  22  | 
  23  | 
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
  100 |         id: 31,
  101 |         todo: 'Pay the bills', 
  102 |         completed: true, 
  103 |         userId: 143 }
  104 | 
  105 |     })
  106 |     const body = await response.json()
> 107 |    const idtobe =  body.todos.find((item:any) =>item.id === 10)
      |                               ^ TypeError: Cannot read properties of undefined (reading 'find')
  108 |    console.log(idtobe);
  109 |    // console.log(body);
  110 |     console.log(response.status());
  111 | console.log(response.headers()['content-type']);
  112 | console.log(await response.text());
  113 | expect(response.status()).toBe(201)
  114 | })
  115 | 
```