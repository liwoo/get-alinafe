const send = require("../functions/mailer");

async function testSend() {
  const response = await send("jeremiahchienda@gmail.com");
  console.log(response);
}

testSend();
