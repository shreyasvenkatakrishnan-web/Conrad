import React from 'react';
import { CreditCard, Link2, BellRing, Sparkles, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <CreditCard className="w-12 h-12 text-emerald-600" />,
      title: "Connect Your Grocery Shopping",
      desc: "Connect WasteLess to your grocery shopping. Our system links your purchases to a smart digital pantry—no manual tracking required.",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Link2 className="w-12 h-12 text-emerald-600" />,
      title: "Build a Smart Pantry Automatically",
      desc: "Every item you buy is automatically added to your home inventory with estimated freshness and expiry timing—so nothing gets forgotten in the back of the fridge.",
      img: "https://www.thespruceeats.com/thmb/D45ZZGtWGoe2cMKljb9r_x3oepc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-493239254-b4ee2820e10a4230a747154c88366f86.jpg"
    },
    {
      icon: <BellRing className="w-12 h-12 text-emerald-600" />,
      title: "Get Alerts Before Food Is Wasted",
      desc: "WasteLess keeps an eye on what’s about to expire and sends timely alerts, helping you use food before it goes bad—not after it’s already wasted.",
      img: "https://cdn.shopify.com/s/files/1/0659/1203/files/5-table-clocks-you-will-love_grande.jpg?v=1570650515"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-emerald-600" />,
      title: "Shop Smarter at Checkout",
      desc: "Before you check out, WasteLess checks your cart against what you already have at home—so you don’t accidentally buy duplicates you won’t use in time.",
      img: "https://img.tpt.cloud/nextavenue/uploads/2018/07/The-Top-6-Healthy-Foods-to-Put-In-Your-Shopping-Cart_142142188.inside.1200x776.jpg"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-emerald-600" />,
      title: "Eat What You Have & Save Money",
      desc: "Need ideas? WasteLess suggests meals based on what you already own—prioritizing items closest to expiration so you save money and reduce waste effortlessly.",
      img: "https://m.media-amazon.com/images/I/81Cv5Cq3wYL._AC_UF350,350_QL80_.jpg"
    }
  ];

  return (
    <div className="pb-24">
      <section className="bg-emerald-950 text-white py-24 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">How it Works</h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
            We've removed the manual work of tracking groceries. Here's how WasteLess changes your kitchen forever.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-emerald-100 -translate-x-1/2"></div>
          
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center md:text-left">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-50 mb-6 shadow-sm`}>
                    {step.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-emerald-950 mb-4">{step.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto md:mx-0">
                    {step.desc}
                  </p>
                </div>
                <div className="flex-1 w-full flex justify-center relative">
                   {/* Step Number Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white hidden md:flex">
                    {i + 1}
                  </div>
                  <div className="w-full aspect-square max-sm bg-slate-100 rounded-[3rem] overflow-hidden shadow-xl border-8 border-white">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;