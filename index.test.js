const { app } = require("./index");
const httpMocks = require('node-mocks-http');

describe('Azure Function HTTP Trigger', () => {
  it('should return status 200 and correct body', async () => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/',
    });
    const res = httpMocks.createResponse();

    // Run the function
    await app(req, res);

    // Assert the result
    expect(res.statusCode).toBe(200);
    expect(res._getData()).toBe("Hello, world!");
  });
});
