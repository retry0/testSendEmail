var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "20fe8b353e0300",
    pass: "55a38bceaad734"
  }
});



var mailOptions = {
  from: 'elife.shams@gmail.com',
  to: 'linggaadi4nd@gmail.com',
  subject: 'Testmail',
  text: 'Hi, mail sent.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});