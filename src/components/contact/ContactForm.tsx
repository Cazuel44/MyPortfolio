"use client";
import { ContactRequestBody } from "@/types/contact";

import { useState } from "react";

type ContactFormProps = {
    onSuccess?: () => void;
};

export const ContactForm = ({ onSuccess }: ContactFormProps) => {

    const [form, setForm] = useState<ContactRequestBody>({
        name: "",
        email: "",
        message: "",
        website: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.error || "Ocurrió un error al enviar el mensaje.");
                /* console.error("Error:", errorData.error); */

                return;
            }

            const data = await response.json();
            console.log("Success:", data);
            setSuccess(true);

        } catch (error) {
            console.error(error);
            setError("Oops! Algo salió mal. Por favor, intenta de nuevo más tarde.");
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
                <label className="text-sm text-zinc-400">
                    Nombre
                </label>

                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className=" w-full mt-2 px-4 py-3 bg-zinc-950/60 border border-orange-500/20 rounded-xl text-white outline-none focus:border-orange-400 transition-all duration-300 " />
            </div>

            {/* EMAIL */}
            <div>
                <label className="text-sm text-zinc-400">
                    Email
                </label>

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tuemail@gmail.com"
                    className=" w-full mt-2 px-4 py-3 bg-zinc-950/60 border border-orange-500/20 rounded-xl text-white outline-none focus:border-orange-400 transition-all duration-300 " />
            </div>

            {/* MESSAGE */}
            <div>
                <label className="text-sm text-zinc-400">
                    Mensaje
                </label>

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje..."
                    rows={5}
                    className=" w-full mt-2 px-4 py-3 bg-zinc-950/60 border border-orange-500/20 rounded-xl text-white outline-none resize-none focus:border-orange-400 transition-all duration-300 " />
            </div>

            {/* Honey pot */}
            <div className="hidden">
                <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                />
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                disabled={isLoading || success}
                className="w-full py-3 bg-orange-500/10 border border-orange-400/30 text-orange-300 rounded-xl hover:bg-orange-500 hover:text-black transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? "Enviando..." : success ? "Mensaje enviado" : "Enviar mensaje"}

            </button>
            {success && (
                <p className="text-green-400 text-sm text-center">
                    Mensaje enviado correctamente.
                </p>
            )}

            {error && (
                <p className="text-red-400 text-sm text-center">
                    {error}
                </p>
            )}
        </form>
    );
};

