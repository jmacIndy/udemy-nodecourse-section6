const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
   var db = {
      saveUser: expect.createSpy()
   };
   app.__set__('db', db);

   it('should call the spy correctly', () => {
      var spy = expect.createSpy();
      spy('Jeff', 53);
      expect(spy).toHaveBeenCalledWith('Jeff', 53);
   });

   it('should call saveUser with user object', () => {
      var email = 'jeff@example.com'
      var password = 'abc123'

      // this is going to call handleSignup, but it won't call
      // the real db.saveUser because it has been replaced with
      // the spy version
      app.handleSignup(email, password);
      expect(db.saveUser).toHaveBeenCalledWith({email, password});
   });
});
