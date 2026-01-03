
import React from 'react';
import { UserPlus, Link2, BellRing, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="w-12 h-12 text-emerald-600" />,
      title: "Create Account",
      desc: "Join Redooste in under 60 seconds. We'll set up your personalized waste dashboard."
    },
    {
      icon: <Link2 className="w-12 h-12 text-emerald-600" />,
      title: "Sync Platforms",
      desc: "Securely link your favorite grocery platforms. We support many major retailers globally."
    },
    {
      icon: <BellRing className="w-12 h-12 text-emerald-600" />,
      title: "Receive Notifications",
      desc: "WasteLess begins tracking. You'll get non-intrusive alerts for expiries and duplicate carts."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-emerald-600" />,
      title: "Eat & Save",
      desc: "Optimize your kitchen. Use our AI recipe tool to turn 'waste' into delicious meals."
    }
  ];

  return (
    <div className="pb-24">
      <section className="bg-emerald-950 text-white py-24 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Simplicity in Motion</h1>
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
                  <div className="w-full aspect-square max-w-sm bg-slate-100 rounded-[3rem] overflow-hidden shadow-xl border-8 border-white">
                    <img 
                      src={`https://picsum.photos/seed/step${i}/600/600`} 
                      alt={step.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 p-12 bg-white rounded-[2.5rem] shadow-2xl border border-emerald-100 text-center">
          <h2 className="text-3xl font-bold text-emerald-950 mb-8">Ready to transform your lifestyle?</h2>
          <button className="px-10 py-5 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-600/30">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
