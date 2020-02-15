const send = require("./mailer");

exports.handler = async (event, context) => {
  const email = event.queryStringParameters.email;
  const response = await send(email);
  return {
    statusCode: response.success ? 200 : 500,
    body: response
  };
};
