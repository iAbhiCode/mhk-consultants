"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import { Button } from "@/components/ui/button";

// const partnerLogos = [
//   {
//     name: "MoneyM",
//     logo: "/logos/moneym.svg",
//     className: "w-28"
//   },
//   {
//     name: "Trade",
//     logo: "/logos/trade.svg",
//     className: "w-24"
//   },
//   {
//     name: "WalletSky",
//     logo: "/logos/walletsky.svg",
//     className: "w-32"
//   },
//   {
//     name: "Cube",
//     logo: "/logos/cube.svg",
//     className: "w-28"
//   },
//   {
//     name: "PayFlow",
//     logo: "/logos/payflow.svg",
//     className: "w-32"
//   },
//   {
//     name: "DarkLight",
//     logo: "/logos/darklight.svg",
//     className: "w-24"
//   }
// ];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0F4C5C] pt-16 pb-8">
      {/* Background Video */}

      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-50">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
        >
          <source
            src="https://videocdn.cdnpk.net/videos/08d4c5c1-2f37-4b13-bdc1-fda785a66c50/horizontal/previews/clear/large.mp4?token=exp=1741853515~hmac=a4f1357b21ea12047326c4262561ee5940ac03524628360cd9a7b18ce3b35969"
            type="video/mp4"
          />
        </video>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C5C]/40 to-[#0F4C5C]/20"></div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#9FE870] opacity-40 blur-2xl" />
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-[#0F4C5C] opacity-20 blur-2xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 h-screen flex flex-col justify-center items-center">
        <div className="text-center max-w-3xl mx-auto">
          {/* Centered Content */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[3.5rem] leading-[1.1] lg:text-[4.5rem] font-medium tracking-tight text-white text-center"
          >
            Your Gateway to a {" "}
            <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Global Future</span>
            {/* <span className="block">Global Future</span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg text-slate-200 max-w-2xl mx-auto text-center"
          >
            Shaping Futures, One Dream at a Time – Your Trusted Partner for Study Visas, Visitor Visas and Language Coaching Worldwide
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              className="h-14 px-8 text-lg bg-[#9FE870] hover:bg-[#9FE870]/90 text-[#0F4C5C] font-medium rounded-full"
            >
              Free consultation
            </Button>
            
            {/* About Us Button - Outlined with hover effect */}
            <Button 
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white hover:text-[#0F4C5C] transition-colors duration-300 font-medium rounded-full"
            >
              About Us
            </Button>
            
            {/* Contact Us Button - Outlined with hover effect */}
            <Button 
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white hover:text-[#0F4C5C] transition-colors duration-300 font-medium rounded-full"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}