const httpMocks = require('node-mocks-http');
const myFunction = require('./index');  

describe('Azure Function HTTP Trigger', () => {
  it('should return status 200 and correct body', async () => {
    
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    
    const context = {
      res: res,  
    };

    await myFunction(context, req);

    expect(res.statusCode).toBe(200);

    expect(res._getData()).toBe("Hello, world!");
  });
});
