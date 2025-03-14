"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  onLearnMore?: () => void;
}

export function ServiceCard({ title, description, image, onLearnMore }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-[400px] group"
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-[#9FE870]/50 shadow-lg shadow-[#9FE870]/10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C5C]/95 via-[#0F4C5C]/70 to-transparent" />
      </div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-[-10px]">
        <div className="bg-[#9FE870]/10 backdrop-blur-sm rounded-xl p-6 border border-[#9FE870]/20">
          <h3 className="text-2xl font-medium text-white mb-3">{title}</h3>
          <p className="text-slate-200 mb-6 line-clamp-2">{description}</p>
          <Button 
            onClick={onLearnMore}
            className="w-full bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] rounded-full text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#9FE870]/20"
          >
            Learn More
          </Button>
        </div>
      </div>
    </motion.div>
  );
} 