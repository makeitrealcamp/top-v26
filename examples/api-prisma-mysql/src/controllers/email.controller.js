import nodemailer from "nodemailer";
import sgMail from "@sendgrid/mail"
sgMail.setApiKey(process.env.API_KEY)

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: process.env.TYPE_AUTH,
    user: process.env.USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

export const sendEmail = async (req, res) => {
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <mariagiraldo4@gmail.com>', // sender address
    to: "mariagiraldo4@gmail.com", // list of receivers
    subject: "First email", // Subject line
    html: "<b>Firt.....</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.send(info);
};


export const sendEmailGrid = async (req, res) => {

    const msg = {
        to: 'mariagiraldo4@gmail.com', // Change to your recipient
        from: 'mariagiraldo4@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
       // text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }

      try {
        const response = await sgMail.send(msg);
        res.send(response)
      } catch (error) {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)
          res.send(error.response.body)
        }
      }
}