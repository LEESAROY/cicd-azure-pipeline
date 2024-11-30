module.exports = async function myFunction(context, req) {
  context.res = {
    status: 200,
    body: "Hello, world!"
  };
};
