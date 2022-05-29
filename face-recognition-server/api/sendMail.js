var nodemailer = require('nodemailer');

const sendMail = (toMail) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'face.recognition.engage@gmail.com',
          pass: 'Malushka@123'
        }
      });

      
      var mailOptions = {
        from: 'face.recognition.engage@gmail.com',
        to: toMail,
        subject: `You're in, let's begin!`,
        text: 'Congratulations! Your account has been created. Please Login and enjoy the services'
      };
    
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports={
    sendMail
}