import nodemailer from "nodemailer";
import { ContactRequestBody } from "@/types/contact";
import { ratelimit } from "@/lib/rateLimit";


export async function POST(req: Request) {
    try {
        /* const body = (await req.json()) as ContactRequestBody; */
        //más limpio y más idiomático.
        const body: ContactRequestBody = await req.json();
        const { name, email, message } = body;

        // VALIDACIÓN CAMPOS
        if (!name || !email || !message) {
            return Response.json(
                { error: "Todos los campos son obligatorios" },
                { status: 400 }
            );
        }

        // HONEYPOT
        if (body.website) {
            return Response.json(
                { error: "bot detected" },
                { status: 400 }
            );
        }

        // RATE LIMIT
        const ip =
            req.headers.get("x-forwarded-for") ?? "anonymous";

        const { success } = await ratelimit.limit(ip);

        if (!success) {
            return Response.json(
                {
                    error:
                        "Demasiados intentos. Intenta nuevamente más tarde.",
                },
                { status: 429 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `Nuevo mensaje de ${name}`,
            text: `
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
            `,
        });

        return Response.json(
            { success: true },
            { status: 200 }
        );

    } catch (error: unknown) {
        console.error(error);

        return Response.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}