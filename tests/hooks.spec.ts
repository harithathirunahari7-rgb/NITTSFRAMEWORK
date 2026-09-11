//set up and tear down process(closing ceremoney or process)
/*

1.test.beforeAll()
ex: dbConnection,initiate reports, logs

2.test.beforeEcah()//used frequently
any preconditions like login url
3.test.AfterEach()
it will run after every test case
ex:logout, validations 

4.test.afterAll()//will run after every test case
report generation, db closing, log file,

execution flow
1,2,3,4 

*/
import {test} from '@playwright/test'

test.afterAll(async()=>{
console.log(`after all`);
})
test.beforeEach(async()=>{
    console.log(`before each test case`);
})
test.beforeAll(async()=>{
    console.log(`before all`);
})
test.afterEach(async()=>{
    console.log(`after each`);
})
test('test case 1',async()=>{
    console.log(`test case 1`);
})
test(`test case 2`,async()=>{
    console.log(`test case 2`);
})
test(`test case 3`, async()=>{
    console.log(`test case 3`);
})
test(`test case 4`, async()=>{
    console.log(`test case 4`);
})