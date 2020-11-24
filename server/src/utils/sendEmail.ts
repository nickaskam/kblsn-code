import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
  //let testAccount = await nodemailer.createTestAccount();
  //console.log("testAccount", testAccount);

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "v4wwey3lf22ldz46@ethereal.email",
      pass: "QCNFA8ppK4y2y3vpam",
    },
  });

  let info = await transporter.sendMail({
    from: '"nick askam" <nick@nickaskam.com>',
    to: to,
    subject: "change password",
    html,
  });

  console.log("messsage sent: %s", info.messsageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
