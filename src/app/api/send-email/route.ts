import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { nome, cpf, nascimento, email, telefone, termo1, termo2 } = await request.json();

    console.log(nome)
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Seu e-mail
        pass: process.env.EMAIL_PASS, // Senha ou App Password
      },
    });
  
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,     
      subject: 'Novo cadastro no site',
      html: `
        <h2>Novo Formulário de Abertura de Conta</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>CPF:</strong> ${cpf}</p>
        <p><strong>Data de Nascimento:</strong> ${nascimento}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Aceitou termo 1:</strong> ${termo1 ? 'Sim' : 'Não'}</p>
        <p><strong>Aceitou termo 2:</strong> ${termo2 ? 'Sim' : 'Não'}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Erro ao enviar:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
