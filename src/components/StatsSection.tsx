"use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";

// const stats = [
//   {
//     number: "1000+",
//     label: "Monthly Transfers",
//     subLabel: "Handled Efficiently",
//     bgColor: "bg-[#0F4C5C]",
//     image: null,
//     decorativeElements: [
//       { color: "bg-[#E5F9E0]", size: "w-16 h-16", position: "bottom-10 right-10", opacity: "opacity-30" },
//       { color: "bg-[#9FE870]", size: "w-20 h-20", position: "bottom-20 right-20", opacity: "opacity-20" }
//     ]
//   },
//   {
//     number: "450+",
//     label: "Clients Empowered",
//     subLabel: "Globally",
//     bgColor: "bg-[#0F4C5C]",
//     image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
//     decorativeElements: [
//       { color: "bg-[#0F4C5C]", size: "w-full h-1/2", position: "top-0", opacity: "opacity-70" }
//     ]
//   },
//   {
//     number: "20+ Years",
//     label: "of Industry",
//     subLabel: "Experience",
//     bgColor: "bg-[#E5F9E0]",
//     textColor: "text-[#0F4C5C]",
//     image: null,
//     decorativeElements: [
//       { color: "bg-white", size: "w-96 h-96", position: "bottom-0 -right-48 rotate-45", opacity: "opacity-10" }
//     ]
//   },
//   {
//     number: "850+",
//     label: "Tailored Strategies",
//     subLabel: "Created",
//     bgColor: "bg-[#0F4C5C]",
//     image: null,
//     decorativeElements: [
//       { color: "bg-[#9FE870]", size: "w-24 h-48", position: "-right-12 top-1/2 -rotate-45 transform -translate-y-1/2", opacity: "opacity-20" },
//       { color: "bg-[#E5F9E0]", size: "w-24 h-48", position: "-right-6 top-1/2 -rotate-45 transform -translate-y-1/2", opacity: "opacity-20" }
//     ]
//   }
// ];

// export default function StatsSection() {
//   return (
//     <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//       {stats.map((stat, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//           className={`relative group overflow-hidden ${stat.bgColor} h-[600px] cursor-pointer`}
//         >
//           {/* Background Image if exists */}
//           {stat.image && (
//             <div className="absolute inset-0">
//               <Image
//                 src={stat.image}
//                 alt={stat.label}
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-110"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-[#0F4C5C] via-transparent to-transparent opacity-90" />
//             </div>
//           )}

//           {/* Decorative Elements */}
//           {stat.decorativeElements?.map((element, i) => (
//             <div
//               key={i}
//               className={`absolute ${element.color} ${element.size} ${element.position} ${element.opacity} transition-transform duration-700 ease-out group-hover:scale-110`}
//             />
//           ))}

//           {/* Content */}
//           <div className="relative h-full p-10 flex flex-col justify-between">
//             <div>
//               <motion.h3 
//                 className={`text-5xl font-medium ${stat.textColor || 'text-white'} tracking-tight`}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 {stat.number}
//               </motion.h3>
//               <motion.p 
//                 className={`text-3xl mt-3 font-medium leading-tight ${stat.textColor || 'text-white'}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//               >
//                 {stat.label}
//               </motion.p>
//               <motion.p 
//                 className={`text-3xl leading-tight ${stat.textColor || 'text-white'}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {stat.subLabel}
//               </motion.p>
//             </div>

//             {/* Arrow Button */}
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className={`w-12 h-12 rounded-full border ${stat.textColor ? 'border-[#0F4C5C]' : 'border-white'} flex items-center justify-center group/btn`}
//             >
//               <ArrowUpRight 
//                 className={`w-6 h-6 ${stat.textColor || 'text-white'} transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1`}
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       ))}
//     </section>
//   );
// } 

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ value, label, duration = 2000 }: { value: string, label: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  
  // Extract number from value (e.g., "8+" becomes 8)
  const finalNumber = parseInt(value.replace(/[^0-9]/g, ''));
  const hasSuffix = value.includes('+');
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Calculate the current count based on progress
      const progressRatio = Math.min(progress / duration, 1);
      // Use easeOutExpo for a nice animation curve
      const easedProgress = 1 - Math.pow(1 - progressRatio, 4);
      const nextCount = Math.floor(easedProgress * finalNumber);
      
      setCount(nextCount);
      
      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(finalNumber);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [finalNumber, duration]);
  
  // Format the display value (add suffix if needed)
  const displayValue = hasSuffix ? `${count}+` : count;
  
  // Special handling for decimal values like 4.8
  const isDecimal = value.includes('.');
  const displayValueDecimal = isDecimal 
    ? (count / 10).toFixed(1)
    : displayValue;
  
  return (
    <div className="flex flex-col items-center px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-bold text-[#0F4C5C]"
      >
        {isDecimal ? displayValueDecimal : displayValue}
      </motion.div>
      <div className="text-center mt-2 text-lg font-medium text-gray-700">
        {label}
      </div>
    </div>
  );
};

const AnimatedStatsCounter = () => {
  const stats = [
    { value: "8+", label: "Visa Categories" },
    { value: "940+", label: "Visa Applications" },
    { value: "940+", label: "Visa Applications" },
    { value: "4.8", label: "Reviews" }
  ];
  
  return (
    <div className="w-full py-12 bg-white rounded-lg shadow-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              duration={2000 + (index * 200)} // Stagger the animations slightly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatsCounter;