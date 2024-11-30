module.exports.app = async function (context, req) {
    context.res = {
      status: 200,
      body: "Hello, world!"
    };
  };
  