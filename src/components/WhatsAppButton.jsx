import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20bertanya%20mengenai%20menu%20dan%20reservasi%20di%20NomNom%20Resto."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
    >
      <MessageCircle size={28} className="fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out text-sm font-medium">
        Hubungi Kami
      </span>
    </a>
  );
}
