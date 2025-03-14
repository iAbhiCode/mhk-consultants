"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const serviceCards = [
  {
    title: "Canada",
    
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
    description: "Expert assistance for a smooth and successful Canada study visa application process."
  },
  {
    title: "UK",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069",
    description: "Guiding you through the process for a hassle-free and successful UK study visa application."
  },
  {
    title: "Australia",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
    description: "Helping you secure your Australia study visa with expert guidance and a smooth process."
  },

  {
    title: "Europe",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
    description: "Expert support to navigate the Europe study visa process for a seamless application experience."
  },
  {
    title: "USA",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
    description: "Unlock opportunities in the USA with quality education and global career prospects."
  },

  {
    title: "New Zealand",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
    description: "We offer expert assistance for New Zealand study, work and permanent residency visas."
  },

];

// const checklistItems = [
//   "Comprehensive visa assessment",
//   "Document preparation assistance",
//   "Application processing support",
//   "Interview preparation",
//   "Post-visa guidance"
// ];

export default function AnalysisSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0F4C5C] to-[#0A3845] py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[56px] font-light text-white mb-6">
          Excellence in <span className="text-[#9FE870] font-normal">Visa </span> Services
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Providing top-tier visa services with expert guidance, ensuring a seamless and successful immigration experience every step.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative h-[400px] group border-4 border-[#9FE870] rounded-3xl"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C5C]/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-medium text-white mb-3">{card.title}</h3>
                <p className="text-slate-200 mb-6">{card.description}</p>
                <Button 
                  className="w-full bg-[#9FE870] hover:bg-white/90 text-[#0F4C5C] rounded-full text-base font-normal"
                >
                  Learn More
                </Button>
                
                {/* Triangles overlay */}
                {/* <div className="absolute left-0 bottom-0">
                  <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 140L70 70L140 140H0Z" fill="#9FE870"/>
                    <path d="M0 70L70 0L140 70H0Z" fill="#9FE870" fillOpacity="0.3"/>
                  </svg>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Checklist Section */}
        {/* <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-[56px] font-light text-white mb-12 leading-[1.2]">
              Why Choose <span className="text-[#9FE870] font-normal">Our<br/>Services</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              {checklistItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <svg className="w-6 h-6 text-[#9FE870]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-lg font-light text-white">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button 
              className="h-14 px-8 bg-white hover:bg-white/90 text-[#0F4C5C] rounded-full text-base font-normal"
            >
              Free consultation
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative h-[600px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                alt="Team meeting"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C5C]/80 to-transparent" />
            </div>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
} 