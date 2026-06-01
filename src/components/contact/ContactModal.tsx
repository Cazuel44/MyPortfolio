import {ContactForm} from "./ContactForm";

type ContactModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const ContactModal = ({
    isOpen,
    onClose,
}: ContactModalProps) => {

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4">

            <div className="relative overflow-hidden w-full max-w-2xl bg-zinc-900/70 border border-orange-500/20 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl shadow-orange-500/10">

                {/* BACKGROUND GLOW */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-black/10 to-orange-500/5 pointer-events-none" />

                {/* AMBIENT LIGHT */}
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

                <div className="relative z-10">

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900/70 border border-orange-500/10 text-2xl text-zinc-300 hover:text-orange-300 hover:border-orange-400/30 hover:bg-zinc-800/80 transition-all duration-300"
                    >
                        ×
                    </button>

                    <p className="text-orange-400 font-semibold tracking-wide mb-4">
                        Contact Form
                    </p>

                    <h2 className="text-5xl font-bold tracking-tight text-white mb-6">
                        Contacto
                    </h2>

                    <p className="text-zinc-400 mb-8 leading-8 max-w-xl">
                        Completa el formulario para enviar un mensaje
                        directamente a mi correo.
                    </p>

                    <ContactForm onSuccess={onClose} />

                </div>

            </div>

        </div>
    );
};

