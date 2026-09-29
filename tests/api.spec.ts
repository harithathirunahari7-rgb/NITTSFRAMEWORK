import {test,expect} from'@playwright/test'
import {request} from 'node:http'
const API_KEY = 'free_user_3JC9FlvtsPsckjpOmBwJqkAW2uU'

test('get response ', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=25',
        {
            headers: {
                'KEY': ` ${API_KEY}`
            }
        }
    )

expect(response.status()).toBe(200)
const contentType = response.headers()['content-type']
const headers =  response.headers()
expect(headers['content-type']).toContain('application/json; charset=utf-8')
const jsonResponse = await response.json()
 console.log(headers);
 console.log(contentType);
 console.log(jsonResponse)


})
//post 201
test('post response', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users',
        {
            headers: {
                'KEY': ` ${API_KEY}`
            },
            data: {
                'name': 'morpheus',
                'job': 'leader',
                'company': 'XYZ',
            }
        }
    )

    const jsonResponse = await response.json()
    console.log(jsonResponse)
    expect(response.status()).toBe(201)
})
//put
test('put response', async ({request}) => {
    const response = await request.put('https://reqres.in/api/users/2',
        {
            headers: {
                'KEY': ` ${API_KEY}`
            },
            data: {
                'name': 'morpheus',
                'job': 'QE',
                'company': 'NIT',
            }
        }
    )

    const jsonResponse = await response.json()
    console.log(jsonResponse)
    console.log('PUT response status:'+response.status())//put or patch 200
    //expect(response.status()).toBe(200)
})
//delete -204
test('delete response', async ({request}) => {
    const response = await request.delete('https://reqres.in/api/users/2',
        {
            headers: {
                'KEY': ` ${API_KEY}`
            }
        }
    )

    console.log('DELETE response status:'+response.status())//204
    expect(response.status()).toBe(204)
})

test('https://dummyjson.com/todos get request',async({request})=>{
    const response = await request.get('https://dummyjson.com/todos',{

    })
  const body = await response.json()
  console.log(body);
  //console.log(response.headers());
  await expect(body.todos[0].id).toBe(1)

 // All IDs:
const ids = body.todos.map((item: any) => item.id);
expect(ids.length).toBeGreaterThan(0)
expect(ids).toContain(10)
console.log(ids);
//Find specific ID:
body.todos.find((item: any) => item.id === 10)
})

test('dummyjson.com/todos post request',async({request})=> {
    const response = await request.post('https://dummyjson.com/todos/add',
    {
    data:{
        id:12,
        todo: 'Pay the bills', //id is created by the API
        completed: true, 
        userId: 143 }

    })
    const body = await response.json()
  // const idtobe =  body.todos.find((item:any) =>item.id === 31)
   //console.log(idtobe);
   //console.log(body);
    //console.log(response.status());
console.log(response.headers()['content-type']);
console.log(await response.text());
expect(response.status()).toBe(201)
})

test('dummyjson/todos patch',async({request})=>{
    const response = await request.patch('https://dummyjson.com/todos/31',{
       data: {
         todo: 'Play golf', 
        completed: true, 
        userId: 12

       
            
        }
    })
    const body = await response.json()
    console.log(response.status());
    console.log(body);
})

test('dummyjson/todos delete',async({request})=>{
    const response = await request.delete('https://dummyjson.com/todos/31',{
   
    })
    const body = await response.json()
    console.log(response.status());
    console.log(body);
})
