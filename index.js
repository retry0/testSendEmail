var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service:'mailgun',
 auth: {
    user: 'postmaster@sandbox6b32c2f3d4f1455887c87e62ababfe4f.mailgun.org',
    pass: 'a3f3da1039c01ad5f8c6c72d1bc3f862-116e1e4d-102d8628'
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