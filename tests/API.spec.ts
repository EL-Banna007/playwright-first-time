import { expect } from '@playwright/test';
import { test } from '../fixtures/Fixtures.ts';
const objectEndpoint = 'https://truetest.es/api/products/';
const LoginEndpoint = 'https://truetest.es/api/users/login';
const objectId = '324';
const updateEndpoint = 'https://api.restful-api.dev/objects/ff808181a09d98f701a18635fa29441a';
const deleteEndpoint = 'https://api.restful-api.dev/objects/ff808181a09d98f701a1865553944494';
test.describe.serial("CRUD Operation", () => {


     test('Get Request - Get Object', async ({ request }) => {

          const startTime = Date.now();
          const responce = await request.get(`${objectEndpoint}${objectId}`,);
          const endTime = Date.now();
          const responseTime = endTime - startTime;
          const responceBody = await responce.json();
          const responceStatus = responce.status();
          const useId = responceBody.user['id'];
          const responceSize = (await responce.body()).byteLength;
          const contentType = responce.headers()['content-type'];

          console.log(`This is the response body:
          ` , responceBody);
          console.log('-------------------------------------------------');
          console.log(`This is the responce:
        ` , responce);
          console.log('-------------------------------------------------');
          console.log(`This is the response status:
         ${responceStatus}`);
          expect(responceStatus).toBe(200);
          console.log('-------------------------------------------------');
          console.log(`This is the content type:
         ${contentType}`);
          expect(contentType).toContain('json')
          console.log('-------------------------------------------------');

          console.log(`This is the response size:
         ${responceSize}`);
          console.log('-------------------------------------------------');
          console.log(`This is the product ID:
         ${responceBody.id}`);
          console.log('-------------------------------------------------');
          console.log(`This is the user id :
         ` , useId);
          expect(useId).toBe(480)
          console.log('-------------------------------------------------');
          console.log(`This is the response time:
         ${responseTime}`);
          expect(responseTime).toBeLessThan(3000);




     })
     //

     test('Post Request - Log In', async ({ request }) => {
          const payload = {

               "email": "dahifayek13@gmail.com",
               "password": "Pa$$w0rd1"

          };

          const startTime = Date.now();
          const responce = await request.post(`${LoginEndpoint}`,
               {
                    data: payload,
               }

          );
          const endTime = Date.now();
          const responseTime = endTime - startTime;
          const responceBody = await responce.json();
          console.log(`This is the response body:
          ` , responceBody);
          console.log('-------------------------------------------------');
          console.log(`This is the responce:
        ` , responce);
          console.log('-------------------------------------------------');
          console.log(`This is the response status:
         ${responce.status()}`);
          console.log('-------------------------------------------------');
          console.log(`This is the content type:
         ${responce.headers()['content-type']}`);
          console.log('-------------------------------------------------');
          const responceSize = (await responce.body()).byteLength;
          console.log(`This is the response size:
         ${responceSize}`);
          console.log('-------------------------------------------------');
          console.log(`This is the user id :
         ` , responceBody.data.id);
          console.log('-------------------------------------------------');
          console.log(`This is the response time:
         ${responseTime}`);




     })
     //

     test('Put Request - fully update an object', async ({ request }) => {
          const payload = {
               "name": "Apple MacBook Pro 16",
               "data": {
                    "year": 2019,
                    "price": 2049.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    "color": "silver"
               }
          };

          const startTime = Date.now();
          const responce = await request.put(`${updateEndpoint}`,

               {
                    data: payload,
                    headers: {
                         'Content-Type': 'application/json'
                    }
               }
          );
          const endTime = Date.now();
          const responseTime = endTime - startTime;
          const responceBody = await responce.json();
          console.log(`This is the response body:
          ` , responceBody);
          console.log('-------------------------------------------------');
          console.log(`This is the responce:
        ` , responce);
          console.log('-------------------------------------------------');
          console.log(`This is the response status:
         ${responce.status()}`);
          console.log('-------------------------------------------------');
          console.log(`This is the content type:
         ${responce.headers()['content-type']}`);
          console.log('-------------------------------------------------');
          const responceSize = (await responce.body()).byteLength;
          console.log(`This is the response size:
         ${responceSize}`);
          console.log('-------------------------------------------------');
          console.log(`This is the product ID:
         ${responceBody.id}`);
          console.log('-------------------------------------------------');
          console.log(`This is the response time:
         ${responseTime}`);




     })

     //
     test('Patch Request - partially update an object', async ({ request }) => {
          const payload = {

               "name": "Apple MacBook Pro 16 (Updated Name)"

          };

          const startTime = Date.now();
          const responce = await request.patch(`${updateEndpoint}`,

               {
                    data: payload,
                    headers: {
                         'Content-Type': 'application/json'
                    }
               }
          );
          const endTime = Date.now();
          const responseTime = endTime - startTime;
          const responceBody = await responce.json();
          console.log(`This is the response body:
          ` , responceBody);
          console.log('-------------------------------------------------');
          console.log(`This is the responce:
        ` , responce);
          console.log('-------------------------------------------------');
          console.log(`This is the response status:
         ${responce.status()}`);
          console.log('-------------------------------------------------');
          console.log(`This is the content type:
         ${responce.headers()['content-type']}`);
          console.log('-------------------------------------------------');
          const responceSize = (await responce.body()).byteLength;
          console.log(`This is the response size:
         ${responceSize}`);
          console.log('-------------------------------------------------');
          console.log(`This is the product ID:
         ${responceBody.id}`);
          console.log('-------------------------------------------------');
          console.log(`This is the response time:
         ${responseTime}`);




     })

     //

     test('Delete Request', async ({ request }) => {
          const payload = {

          };

          const startTime = Date.now();
          const responce = await request.delete(`${deleteEndpoint}`);
          const endTime = Date.now();
          const responseTime = endTime - startTime;
          const responceBody = await responce.json();
          console.log(`This is the response body:
          ` , responceBody);
          console.log('-------------------------------------------------');
          console.log(`This is the responce:
        ` , responce);
          console.log('-------------------------------------------------');
          console.log(`This is the response status:
         ${responce.status()}`);
          console.log('-------------------------------------------------');
          console.log(`This is the content type:
         ${responce.headers()['content-type']}`);
          console.log('-------------------------------------------------');
          const responceSize = (await responce.body()).byteLength;
          console.log(`This is the response size:
         ${responceSize}`);
          console.log('-------------------------------------------------');
          console.log(`This is the response time:
         ${responseTime}`);




     })

})