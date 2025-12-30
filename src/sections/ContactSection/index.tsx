import { useState, useRef, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import { SectionHeader } from "@/components/SectionHeader";

export const ContactSection = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await emailjs.send(
                "service_brs2wbi",
                "template_u91wo1p",
                {
                    from_name: formData.name,
                    to_name: "Ookamonu",
                    from_email: formData.email,
                    to_email: "mr.okamonu@gmail.com",
                    message: formData.message,
                },
                "x1PfJHRdER4cpXMxz"
            );

            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });
            alert("Thank you. I will get back to you as soon as possible.");
        } catch (error) {
            setIsLoading(false);
            console.error(error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="box-border caret-transparent mt-16" id="contact">
            <SectionHeader title="Contact" />
            <div className="box-border caret-transparent max-w-xl mx-auto mt-8">
                <div className="bg-neutral-950/80 border border-white/[0.03] rounded-2xl p-8 relative overflow-hidden">


                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">Let's Talk</h3>
                        <p className="text-zinc-400 mb-8">
                            Whether you're looking to bring a unique project to life, improve an existing platform, or build a new application, I'm here to help.
                        </p>

                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full caret-white bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/50 focus:bg-white/[0.05] transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                                    Email URL
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="johndoe@email.com"
                                    required
                                    className="w-full caret-white bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/50 focus:bg-white/[0.05] transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Share your thoughts..."
                                    required
                                    className="w-full caret-white bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/50 focus:bg-white/[0.05] transition-all resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-white text-black font-semibold rounded-lg px-4 py-3 hover:bg-zinc-200 disabled:opacity-70 disabled:cursor-not-allowed transition-colors mt-2"
                            >
                                {isLoading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
