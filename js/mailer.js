const mailer = require("nodemailer");


async function send(recepient, link, username, password) {

  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password
    }
  });

  const mailOptions = {
    from: `Liwu <${username}>`,
    to: recepient,
    subject: "Enjoy the Intro.",
    attachments: [
      {
        filename: "Intro.mp3.zip",
        path: link
      }
    ],
    html:
      "<p>Whatsup!</p><p><Thank you for supporting my music!</p><p>Please find attached the Intro to my upcoming album!  Don't forget to check out the <a href='https://youtu.be/McDvYyCLYBs'>video on YouTube as well</a>.</p><br /><p>Much Appreciated,</p><p>Liwu</p>"
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
    return {
      success: true,
      message: info.response
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: error[Error]
    };
  }
}

module.exports = send;
