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
const jsonResponse = await response.json()
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
    console.log('PUT response status:'+response.status())//200
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