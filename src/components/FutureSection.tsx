import { Button } from "@/components/ui/button";
import Image from "next/image";

// const features = [
//   { name: "Smart Investing" },
//   { name: "Resource Control" },
//   { name: "Pay Tracking" },
//   { name: "Smart Wallet" },
//   { name: "Goal Tracking" },
//   { name: "Profit Planner" },
// ];

export default function FutureSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-5 lg:pl-12 pt-12">
            <h2 className="text-[52px] leading-[1.15] text-[#0F4C5C] font-normal mb-5">
            Your Pathway to Global Education
            </h2>
            <p className="text-lg text-[#0F4C5C]/70 mb-10">
            Through expert guidance and tailored support, we turn your dream of studying abroad into reality, making the process seamless.
            </p>

          

            {/* <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E8F5F1]">
                    <svg className="w-3 h-3 text-[#0F4C5C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[15px] text-[#0F4C5C]">{feature.name}</span>
                </div>
              ))}
            </div> */}

            <Button className="h-11 px-7 bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white rounded-full text-[15px]">
              Contrat Us
            </Button>


            <div className="h-11 px-10 -top-8 -left-6 bg-[#E8F5F1] rounded-xl p-4 shadow-lg w-[220px]">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#0F4C5C] font-medium">Visa Assistance</p>
                    <div className="flex items-center gap-2">
                      <svg className="w-24 h-8" viewBox="0 0 96 32" fill="none">
                        <path d="M0 30L24 25L48 28L72 15L96 2" stroke="#0F4C5C" strokeWidth="2"/>
                      </svg>
                      
                    </div>
                    <p className="text-sm text-[#0F4C5C]/70">Seamless guidance for your journey.</p>
                  </div>
                </div>

           
          </div>

          {/* Right Side with Floating Cards */}
          <div className="lg:col-span-7 relative min-h-[680px]">
            <div className="absolute inset-0">
              <div className="relative w-[520px] h-[600px] ml-auto mr-12">
                {/* Main Image */}
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076"
                    alt="Professional woman"
                    fill
                    className="object-cover object-[center_25%]"
                    priority
                  />
                </div>

                {/* Project Scope Card */}
                <div className="absolute -top-8 -right-6 bg-[#E8F5F1] rounded-xl p-4 shadow-lg w-[220px]">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm text-[#0F4C5C] font-medium">Visa Assistance</p>
                    <div className="flex items-center gap-2">
                      <svg className="w-24 h-8" viewBox="0 0 96 32" fill="none">
                        <path d="M0 30L24 25L48 28L72 15L96 2" stroke="#0F4C5C" strokeWidth="2"/>
                      </svg>
                      
                    </div>
                    <p className="text-sm text-[#0F4C5C]/70">Seamless guidance for your journey.</p>
                  </div>
                </div>

                {/* Income Card */}
                <div className="absolute -left-16 bottom-32 bg-white rounded-xl p-4 shadow-lg w-[160px]">
                  <p className="text-lg text-[#0F4C5C]/70 uppercase tracking-wider mb-1">Study Abroad</p>
                  <p className="text-sm text-[#0F4C5C] mb-0.5">Your gateway to global education</p>
                </div>

                {/* Goals Card */}
                <div className="absolute -bottom-4 -right-6 bg-[#0F4C5C] rounded-xl p-4 text-white shadow-lg w-[220px]">
                  {/* <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#9FE870]"></div>
                    <p className="text-[11px] font-medium tracking-wider">GOALS</p>
                  </div> */}
                  <p className="text-[15px] font-medium mb-1">Language Coaching</p>
                  <p className="text-[11px] text-white/70">Achieve top scores with confidence.</p>
                  {/* <div className="w-full h-1 bg-white/20 rounded-full mt-2.5">
                    <div className="w-1/3 h-full bg-[#9FE870] rounded-full"></div>
                  </div> */}
                  {/* <div className="flex justify-between mt-2 text-[11px]">
                    <span>$5,000</span>
                    <span>$20,000</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 