const httpMocks = require('node-mocks-http');
const myFunction = require('./index');

describe('Azure Function HTTP Trigger', () => {
  it('should return status 200 and correct body', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const context = {};

    console.log("Mocked context:", context);
    console.log("Mocked request:", req);

    await myFunction(context, req, res);

    console.log("Full response object:", res);
    console.log("Response body in res:", res._getData());
    console.log("Context response body:", context.res ? context.res.body : 'No context response');

    expect(res.statusCode).toBe(200);

    expect(res._getData()).toBe("Hello, world!");
  });
});
