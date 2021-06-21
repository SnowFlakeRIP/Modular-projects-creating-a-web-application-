require('dotenv').config()


const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

const mailOptions = {
    from:'schmakov8@gmail.com',
    to:'schmakov8@gmail.com',
    subject: 'Тема',
    text:'Текст'
}


transporter.sendMail(mailOptions)
