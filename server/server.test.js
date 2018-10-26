const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

   describe('GET /', () => {
      it('should return hello world response', (done) => {
         request(app)
            // .get('/')
            // .expect(200)
            // .expect('Hello world!')
            // .end(done);

            // or
            // .get('/')
            // .expect(404)
            // .expect({
            //    error: 'Page not found'
            // })
            // .end(done)

            // or
            .get('/')
            .expect(404)
            .expect((res) => {
               expect(res.body).toInclude({
                  error: 'Page not found'
               });
            })
            .end(done)
      });
   });

   describe('GET /users', () => {
      it('should ensure that I am in list of users', (done) => {
         request(app)
         .get('/users')
         .expect(200)
         .expect((res) => {
            expect(res.body).toInclude(
               {
                  name: 'Jeff',
                  age: 53
               }
            );
         })
         .end(done)
      });
   });
});
