const httpMocks = require('node-mocks-http');
const { app } = require('./index');

describe('Azure Function HTTP Trigger', () => {
  it('should return status 200 and correct body', async () => {

    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    await app(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getData()).toBe("Hello, world!");
  });
});
