const send = require("./mailer");
const { SONGLINK, FROMEMAIL, FROMPASSWORD } = process.env;
exports.handler = async (event, context) => {
  const email = event.queryStringParameters.email;
  const response = await send(email, SONGLINK, FROMEMAIL, FROMPASSWORD);
  return {
    statusCode: response.success ? 200 : 500,
    body: JSON.stringify(response)
  };
};
