import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

export async function POST(request) {
    const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    const formData = await request.formData()
    const name = formData.get('first-name')
    const surname = formData.get('last-name')
    const phone = formData.get('phone-number')
    const email = formData.get('email')
    const message = formData.get('message')

    const transporter = nodemailer.createTransport({
        host: "smtps.aruba.it",
        port: 465,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: username,
            pass: password
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Richiesta di informazioni dal sito web www.tenniscomunalitrissino.it`,
            html: `
            <p>Name: ${name}</p>
            <p>Cognome: ${surname}</p>
            <p>Telefono: ${phone} </p>
            <p>E-mail: ${email} </p>

            <p>Messaggio: ${message} </p>
            `,
        })
        return NextResponse.json({ message: "Grazie! L'email è stata inviata correttamente. Ti ricontattiamo il prima possibile!" })
    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "Ci dispiace! L'email non è stata inviata. Ti suggeriamo di contattarci con gli altri metodi indicati su questa pagina." })
    }

}