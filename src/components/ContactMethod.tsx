"use client";
import { useState, useRef, useEffect } from "react";
import { Phone, Mail } from "lucide-react";

const ContactMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState<"phone" | "email" | null>(null);
    const [contactValues, setContactValues] = useState({ phone: "", email: "" });
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Handle click-away
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setSelectedMethod(null); // Unfocus input but keep value
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle input change
    const handleInputChange = (type: "phone" | "email", value: string) => {
        setContactValues((prev) => ({ ...prev, [type]: value }));

        // If the input is cleared, allow switching back
        if (value === "") {
            setSelectedMethod(null);
        }
    };

    return (
        <div ref={containerRef}>
            <label className="block text-white mb-2 font-semibold md:text-lg">
                Preferred Contact Method
            </label>
            <div className="flex items-center gap-8">
                {/* Phone Option */}
                <button
                    type="button"
                    className={`flex items-center gap-4 p-3 rounded-md border w-full text-white transition ${selectedMethod === "phone"
                        ? "border-primary ring-1 ring-primary"
                        : "border-border bg-background-grey"
                        } ${contactValues.email ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => {
                        if (!contactValues.email) {
                            setSelectedMethod("phone");
                            setTimeout(() => inputRef.current?.focus(), 0);
                        }
                    }}
                    disabled={!!contactValues.email}
                >
                    <Phone size={20} className={`${contactValues.phone ? "animate-bounce duration-300" : ""}`} />
                    {selectedMethod === "phone" ? (
                        <input
                            ref={inputRef}
                            type="tel"
                            placeholder="Enter Your Number"
                            className="bg-transparent outline-none w-full"
                            value={contactValues.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            autoFocus
                        />
                    ) : (
                        contactValues.phone || "Enter Your Number"
                    )}
                </button>

                {/* Email Option */}
                <button
                    type="button"
                    className={`flex items-center gap-4 p-3 rounded-md border w-full text-white transition ${selectedMethod === "email"
                        ? "border-primary ring-1 ring-primary"
                        : "border-border bg-background-grey"
                        } ${contactValues.phone ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => {
                        if (!contactValues.phone) {
                            setSelectedMethod("email");
                            setTimeout(() => inputRef.current?.focus(), 0);
                        }
                    }}
                    disabled={!!contactValues.phone}
                >
                    <Mail size={20} className={`${contactValues.email ? "animate-bounce duration-300" : ""}`} />
                    {selectedMethod === "email" ? (
                        <input
                            ref={inputRef}
                            type="email"
                            placeholder="Enter Your Email"
                            className="bg-transparent outline-none w-full"
                            value={contactValues.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            autoFocus
                        />
                    ) : (
                        contactValues.email || "Enter Your Email"
                    )}
                </button>
            </div>
        </div>
    );
};

export default ContactMethod;

