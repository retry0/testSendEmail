var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'mailgun',
  auth: {
    user: 'postmaster@sandbox4dd0c099139c400299fa8498181d1da2.mailgun.org',
    pass: '58a4197f561ac7b30b60a54d35f61bd3-4412457b-5c27347a'
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