const nodemailer = require('nodemailer')
require('dotenv').config();

const sendEmail = async (req,res,next) =>{

  //TODO: pasar por parámetros el from, to, subject, swixht para identificar departamentos

 //const from = 'dayern.gomez@gmail.com';
  // const from = 'dgomez@sdm.com.do';
//console.log(req);
    //const to = 'kevinfeliz2016@gmail.com';
    const to = req.body.to;
    let subject = '';
    const message = req.body.html;
    const department = req.body.department;
    console.log(department);
        switch (department) {
            case 'taller':
                subject = 'Resumen de recepción';
                break;

                case 'motorPlan':
                subject = 'Notificación nueva reserva';
                break;

            default:
                subject = 'Notificación'
                break;
        }
    const transport = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        // auth: {
        //   user: 'sdmmailnotification@gmail.com',
        //   pass:'osccdkevvwfqgcoh'

        // }
          auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD

        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: to,
        subject: subject,
        html: message
    };

    transport.sendMail(mailOptions, function(error, info){

        if(error){
            console.log(error,'error');
            res.json({
                ok: false,
                msg: 'Mail cannot be sended!'
            })
        }else{
            res.json({
                ok: true,
                msg: 'Mail sended ' + info.response
            })
        }
    })
}
module.exports = {sendEmail}