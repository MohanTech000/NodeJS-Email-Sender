const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();


    //connection of SMTP
    const transporter = nodemailer.createTransport({
        host: 'Your Ethereal Host',
        port: 'your Ethereal Port',
        auth: {
            user: 'Ethereal Username',
            pass: 'Ethereal Password'
        }
    });


    //sending mail to user: 

    let info = await transporter.sendMail({
        from: '"Mohsin khan👻" <test@test.com>', // sender address
        to: "example@gmail.com , example@gmail.com", // list of receivers
        subject: "Hello, Iam hiring you. ✔", // Subject line
        text: "Hello Backend-Dev", // plain text body
        html: "<b>Hello Backend-Dev?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
}

module.exports = sendMail;