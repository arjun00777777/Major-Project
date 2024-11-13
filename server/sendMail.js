const express = require('express');
const nodemailer = require('nodemailer');


const Email = (req, res) => {
    const { to, subject, text } = req.body;
   
    const transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 465,
        secure : true,
        auth : {
            user : "checkemail1234567890@gmail.com",
            pass : "ufovhzhkdlykgvbq"
        }
    });


    const mailOptions = {
        from: 'checkemail1234567890@gmail.com',
        to : to,
        subject : subject,
        text : text
    };

    transporter.sendMail(mailOptions,  (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            res.send('Email sent');
            console.log('Email:',  info && info.to);
        console.log('Amount:',  info && info.text);
        }
    });
};

module.exports = Email

