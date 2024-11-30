const httpMocks = require('node-mocks-http');
const myFunction = require('./index');

describe('Azure Function HTTP Trigger', () => {
  it('should return status 200 and correct body', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    
    const context = {
      res: {}
    };

    console.log("Mocked context before function execution:", context);
    console.log("Mocked request:", req);

    await myFunction(context, req, res);

    console.log("Full response object after function execution:", res);
    console.log("Response body in res:", res._getData());
    console.log("Context response body:", context.res.body);

    expect(res.statusCode).toBe(200);

    expect(res._getData()).toBe("Hello, world!");
  });
});
