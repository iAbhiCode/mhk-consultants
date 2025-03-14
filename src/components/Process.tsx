"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Dedicated Client Support",
    description: "Our dedicated support team is always ready to address your questions and provide expert guidance on the best career-oriented preparation options tailored to your goals at Abroad Dreams Consultant.",
    icon: "✓",
    color: "text-[#0F4C5C]"
  },
  {
    title: "Professional Trainer",
    description: "We understand the importance of your educational journey and offer expert trainers to ensure your career advancement through quality learning opportunities.",
    icon: "✓",
    color: "text-[#FFA500]"
  },
  {
    title: "Global Networks",
    description: "We deliver exceptional results globally, guiding individuals with expert immigration solutions to achieve their aspirations both in India and internationally.",
    icon: "✓",
    color: "text-[#FFA500]"
  },
  {
    title: "True To Our Value",
    description: "We take pride in offering expert advice, bringing unmatched knowledge and experience to ensure the best outcome for your study and immigration goals.",
    icon: "✓",
    color: "text-[#0F4C5C]"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Free consultation to understand your goals and eligibility for various visa options.",
    color: "bg-[#9FE870]"
  },
  {
    step: "02",
    title: "Documentation",
    description: "Assistance with gathering and preparing all necessary documents for your visa application.",
    color: "bg-[#0F4C5C]"
  },
  {
    step: "03",
    title: "Application Filing",
    description: "Expert support in completing and submitting your visa application with precision.",
    color: "bg-[#9FE870]"
  },
  {
    step: "04",
    title: "Interview Preparation",
    description: "Comprehensive guidance and mock interviews to prepare you for visa interviews.",
    color: "bg-[#0F4C5C]"
  },
  {
    step: "05",
    title: "Visa Processing",
    description: "Regular follow-ups and updates on your visa application status.",
    color: "bg-[#9FE870]"
  },
  {
    step: "06",
    title: "Post-Visa Support",
    description: "Continued assistance with travel arrangements and pre-departure guidance.",
    color: "bg-[#0F4C5C]"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      {/* Header */}
      <div className="relative">
        <div className="w-full bg-[#0F4C5C] py-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-[#FFD700]"
          >
            Why Choose Us?
          </motion.h2>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side features */}
          <div className="space-y-12">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="flex items-center text-xl font-semibold mb-4">
                  <span className={`mr-2 ${feature.color}`}>{feature.icon}</span>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] rounded-full overflow-hidden border-8 border-[#0F4C5C]/10"
          >
            <Image
              src="/consultation.jpg" // Add your image to the public folder
              alt="Consultation"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right side features */}
          <div className="space-y-12">
            {features.slice(2).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="flex items-center text-xl font-semibold mb-4">
                  <span className={`mr-2 ${feature.color}`}>{feature.icon}</span>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F4C5C] mb-6">
            Our Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to ensure your visa application process is smooth and successful
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white rounded-2xl border-2 border-[#0F4C5C]/10 hover:border-[#9FE870]/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                {/* Step Number */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {step.step}
                </div>

                {/* Content */}
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-[#0F4C5C] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0F4C5C] to-[#9FE870] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
