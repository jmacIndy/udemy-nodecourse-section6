const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

   describe('#add', () => {
      it('should add two numbers', () => {
         var res = utils.add(33, 11);

         expect(res).toBe(44).toBeA('number');

      });
   });


   // for asynchronous testing, if you don't specify done, the
   // expect won't work becuase it will run before asynchronous
   // function has completed
   it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
         expect(sum).toBe(7).toBeA('number');
         done();
      });
   });

   it('should square a number', () => {

      var res = utils.square(9);

      expect(res).toBe(81).toBeA('number');

   });

   it('should aaync square a number', (done) => {
      utils.asyncSquare(7, (square) => {
         expect(square).toBe(49).toBeA('number');
         done();
      });
   });
});



// it('should expect some values', () => {

   // this will pass
   //expect(12).toNotBe(11);

   // this will fail
   //expect({name: 'Jeff'}).toBe({name: 'Jeff'});

   // this will succeed
   //expect({name: 'Jeff'}).toEqual({name: 'Jeff'});

   // this will pass
   //expect([2, 3, 4]).toInclude(2);

   // this will pass
   //expect({
   //   name: 'Jeff',
   //   age: 53,
   //   location: 'Mooresville'
   //}).toInclude({age: 53});

   it('should verify that first and last names are set', () => {
      var user = {
         age: 53,
         location: 'Mooresville'
      };
      var res = utils.setName(user, 'Jeff McGinley');
      expect(user).toEqual(res).toInclude({
         firstName: 'Jeff',
         lastName: 'McGinley'
      });
   });
