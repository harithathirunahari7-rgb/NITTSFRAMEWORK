/*APT testting

https://reqres.in/
generate the api key on the above URL

API Testing is a type of software testing that involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security.
APT 

diff methods of API testing
1. GET--to retrieve data from the server
2. POST-- to send data to the server to create/u a resource/create a new record

3. PUT-- to send data to the server to create/update a resource
4. DELETE-- to send data to the server to delete a resource
5. PATCH-- to send data to the server to update a partial resource/data/record

diference between put and patch::
PUT is used to update a resource completely, while PATCH is used to update a resource partially. In other words, PUT replaces the entire resource with the new data, 
while PATCH only updates the specified fields of the resource. 

different types of status codes::
1. 1xx: Informational responses
2. 2xx: Successful responses ex:200 OK, 201 Created, 202 Accepted 204 No Content found
3. 3xx: Redirection messages
4. 4xx: Client error responses ex:400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found   
5. 5xx: Server error responses ex 500 Internal Server Error, 501 Not Implemented, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout

diferent url used for APT testing::
*/
import {test,expect} from '@playwright/test'
import {request} from 'node:http'