
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Bell, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://picsum.photos/seed/foodwaste/1920/1080" 
            alt="Sustainability Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Shop Smart. <br />
              <span className="text-emerald-400">Waste Less.</span>
            </h1>
            <p className="text-xl text-emerald-50/80 mb-10 leading-relaxed max-w-2xl">
              Redooste is revolutionizing how you manage your groceries. Our WasteLess software syncs with your favorite platforms to track shelf life and prevent over-buying automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/product" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-900 bg-emerald-400 rounded-full hover:bg-emerald-300 transition-all shadow-lg hover:shadow-emerald-400/20 group"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Proof Points */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col justify-center">
            <div className="text-4xl font-bold text-emerald-700 mb-2">8%</div>
            <p className="text-slate-600">Possible cut in global emissions if we stopped wasting food</p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col justify-center">
            <div className="text-4xl font-bold text-emerald-700 mb-2">$1 Trillion</div>
            <p className="text-slate-600">Worth of food wasted every year globally (1.3 billion tons)</p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-emerald-100 shadow-sm flex flex-col justify-center">
            <div className="text-4xl font-bold text-emerald-700 mb-2">31%</div>
            <p className="text-slate-600">Food waste happening at retail and consumer levels</p>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 rounded-[2.5rem] p-12 md:p-20 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8">
                Your pantry, perfectly synced.
              </h2>
              <ul className="space-y-6">
                {[
                  { 
                    icon: <ShoppingCart className="text-emerald-600" />, 
                    title: "Platform Integration", 
                    desc: "Seamlessly connects with Amazon Fresh, Instacart, Walmart, and more." 
                  },
                  { 
                    icon: <Bell className="text-emerald-600" />, 
                    title: "Smart Alerts", 
                    desc: "Get notified before items expire, not after they go bad." 
                  },
                  { 
                    icon: <CheckCircle2 className="text-emerald-600" />, 
                    title: "Anti-Duplicate Tech", 
                    desc: "Instantly alerts you if you're buying something you already have." 
                  }
                ].map((feature, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-900">{feature.title}</h3>
                      <p className="text-emerald-800/70">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-emerald-200 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200" 
                  alt="WasteLess Interface - Tracking Greek Yogurt" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-emerald-100 hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Expiry Warning</span>
                </div>
                <p className="font-semibold text-emerald-900">Greek Yogurt expires in 2 days</p>
                <button className="mt-4 text-sm font-bold text-emerald-600 hover:underline">See recipes &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
