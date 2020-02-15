const mailer = require("nodemailer");

const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "liwuraps@gmail.com",
    pass: "t1m3ISn0w"
  }
});

async function send(recepient) {
  const mailOptions = {
    from: "Liwu <liwuraps@gmail.com>",
    to: recepient,
    subject: "Enjoy the Intro.",
    attachments: [
      {
        filename: "Intro.mp3.zip",
        path:
          "https://res.cloudinary.com/tiyeni/raw/upload/v1581743489/Intro.mp3.zip"
      }
    ],
    html:
      "<p>Whatsup!</p><p><Thank you for supporting my music!</p><p>Please find attached the Intro to my upcoming album!  Don't forget to check out the video on YouTube as well.</p><br /><p>Much Appreciated,</p><p>Liwu</p>"
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
