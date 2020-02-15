const send = require("./mailer");

exports.handler = async (event, context) => {
  const email = event.queryStringParameters.email;
  const response = send(email);
  return {
    statusCode: response.success ? 200 : 500,
    body: response.message
  };
};
