exports.handler = async (event, context) => {
  const email = event.queryStringParameters.name || "World";

  return {
    statusCode: 200,
    body: `Hello, ${email}`
  };
};
