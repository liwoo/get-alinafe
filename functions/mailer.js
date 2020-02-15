const mailer = require("nodemailer");

const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "liwuraps@gmail.com",
    pass: "t1m3ISn0w"
  }
});

export default function send(recepient) {
  const mailOptions = {
    from: "Liwu <liwuraps@gmail.com>",
    to: $recepient,
    subject: "Enjoy the Intro.",
    attachments: [
      {
        filename: "Intro.mp3.zip",
        path: __dirname + "/attachment.txt"
      }
    ],
    html:
      "<p>Whatsup!</p><p><Thank you for supporting my music!</p><p>Please find attached the Intro to my upcoming album!  Don't forget to check out the video on YouTube as well.</p><br /><p>Much Appreciated,</p><p>Liwu</p>"
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return {
        success: false,
        message: error
      };
    } else {
      return {
        success: true,
        message: info.response
      };
    }
  });
}
