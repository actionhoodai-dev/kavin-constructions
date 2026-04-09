"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useProjectStore } from "@/store/useProjectStore";

export default function WhatsappButton() {
  const { settings } = useProjectStore();
  const phone = settings?.phone?.replace(/\s+/g, '') || "8072524820";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-8 right-8 z-[100]"
    >
      <Link
        href={`https://wa.me/91${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group block"
      >
        <div className="relative bg-[#25D366] text-white p-3 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.3-.149-1.777-.878-2.047-.978-.27-.1-.466-.149-.663.149-.197.297-.767.977-.94 1.177-.173.199-.347.223-.647.075-.3-.15-1.265-.465-2.41-1.485-.89-.792-1.492-1.77-1.667-2.07-.175-.3-.019-.462.13-.61.135-.133.3-.348.45-.522.15-.174.2-.298.3-.497.102-.199.05-.372-.025-.521-.075-.148-.663-1.598-.908-2.187-.239-.575-.48-.497-.663-.506-.172-.007-.37-.008-.57-.008-.2 0-.525.075-.798.372-.273.299-1.04 1.018-1.04 2.484 0 1.465 1.066 2.88 1.215 3.079.149.199 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.777-.726 2.027-1.428.25-.703.25-1.306.175-1.428-.076-.122-.276-.197-.577-.347zM12 2C6.477 2 2 6.477 2 12c0 2.102.651 4.05 1.765 5.656L2 22l4.477-1.652A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.962 7.962 0 01-4.325-1.27l-.31-.184-2.613.964.981-2.548-.202-.321A7.961 7.961 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
          </svg>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-[4px_4px_0px_0px_#FBBF24]">
             Chat with Kavin Expert
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
