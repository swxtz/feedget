import { MailAdapter, SendMailData,  } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1d6d4722d1607c",
      pass: "a977e679d08a50"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
        from: 'Equipe FeedGet <Suporte@feedget.com>',
        to: 'Gustavo Mendonça <Gustamendo8003@gmail.com>',
        subject,
        html: body,
    })

   };
}