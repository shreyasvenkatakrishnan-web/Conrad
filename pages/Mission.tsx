
import React from 'react';
import { Target, Heart, Globe, AlertTriangle, Zap, ShoppingBag, ShieldCheck } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const voxData = [
  { name: 'Food service', value: 163.1, color: '#90b77d' },
  { name: 'In homes', value: 160.9, color: '#2d511a' },
  { name: 'Retail', value: 26.5, color: '#5b7d41' },
];

const Mission: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header - Matching How It Works style */}
      <section className="bg-emerald-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our Mission</h1>
          <p className="text-xl text-emerald-200 max-w-4xl mx-auto leading-relaxed">
            Our mission is to help people reduce food waste through smart and automated grocery tracking, saving money and protecting the environment.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Problem Section */}
        <div className="grid md:grid-cols-2 gap-20 items-start mt-20 mb-24">
          <div>
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">The Household Blindspot</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Most food waste stems from a simple oversight: forgetting what's already in the pantry. This leads to duplicate purchases, unnecessary spending, and tons of food ending up in landfills.
              </p>
              <p>
                In industrialized nations, <strong>31% of food waste</strong> happens at the consumer level. This isn't just a waste of money—it's a major environmental driver, fueling methane emissions that damage our planet.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-emerald-50 shadow-sm items-center">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-slate-600 text-sm italic">"I bought yogurt again, forgetting we had a full tub at home."</p>
              </div>
              <div className="flex gap-4 p-5 bg-emerald-900 rounded-2xl text-white shadow-lg items-center">
                <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-emerald-50 text-sm font-medium">WasteLess alerts you at checkout, stopping duplicates before you pay.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-emerald-50 lg:sticky lg:top-24">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-emerald-950 mb-1 leading-tight">Where food gets wasted in the US</h3>
              <p className="text-sm text-slate-400 font-medium italic">Most consumer-level food waste occurs in the home or in food service.</p>
            </div>
            
            <div className="h-[350px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={voxData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={120}
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {voxData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px', fontWeight: 'bold' }}
                    formatter={(value: number) => [`${value} lbs`, 'Annual Waste']}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Manual Labels for Fidelity to the Image aesthetic */}
              <div className="absolute top-[40%] right-[5%] text-right pointer-events-none">
                <p className="text-[11px] font-black text-slate-900 uppercase">Food service</p>
                <p className="text-xs font-bold text-slate-600">163.1 lbs</p>
              </div>
              <div className="absolute bottom-[20%] left-[10%] text-left pointer-events-none">
                <p className="text-[11px] font-black text-slate-900 uppercase">In homes</p>
                <p className="text-xs font-bold text-slate-600">160.9 lbs</p>
              </div>
              <div className="absolute top-[18%] left-[42%] text-left pointer-events-none">
                <p className="text-[11px] font-black text-slate-900 uppercase">Retail</p>
                <p className="text-xs font-bold text-slate-600">26.5 lbs</p>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100">
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Figures represent annual food waste per person. "Retail" refers to supermarkets and convenience stores, specialized stores such as greengrocers and butchers, and outdoor markets and stalls. This data set doesn't include food lost on the farm or in processing, transport, or storage.
              </p>
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                <span>Source: UNEP / Vox</span>
                <span className="text-emerald-500 font-black">Interactive Data</span>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Section */}
        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-16 mb-24 border border-slate-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8 text-center">Seamless, Passive Tracking</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-5 text-slate-600">
                <p>
                  Manual logging apps fail because they require constant effort. Our innovation is the first <strong>passive system</strong> that integrates directly with online platforms.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2 items-center text-sm font-semibold text-emerald-900">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" /> Automated Inventory Updates
                  </li>
                  <li className="flex gap-2 items-center text-sm font-semibold text-emerald-900">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" /> Real-time Checkout Alerts
                  </li>
                  <li className="flex gap-2 items-center text-sm font-semibold text-emerald-900">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" /> Smart Expiry Predictions
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-50">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 text-sm">Traditional Shopping</h4>
                      <p className="text-xs text-slate-500">Buy yogurt twice &rarr; First tub expires &rarr; Waste.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950 text-sm">With WasteLess</h4>
                      <p className="text-xs text-slate-500">Alert at checkout &rarr; Stop duplicate &rarr; Save money.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-10 bg-emerald-950 text-white rounded-[2.5rem] md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Environmental Scale</h2>
            <p className="text-emerald-100/80 leading-relaxed mb-10 max-w-xl">
              U.S. food waste generates <strong>55 million metric tons</strong> of CO₂-equivalent emissions every year. By reducing spoilage at home, we preserve critical resources and support global hunger relief.
            </p>
            <div className="flex flex-wrap gap-8 border-t border-emerald-800/50 pt-8">
              <div>
                <div className="text-4xl font-bold text-emerald-400">55M</div>
                <div className="text-xs uppercase tracking-widest font-bold text-emerald-500">Metric Tons CO₂-e</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400">31%</div>
                <div className="text-xs uppercase tracking-widest font-bold text-emerald-500">Retail & Consumer Waste</div>
              </div>
            </div>
          </div>
          <div className="p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Scalable Change</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              We track inventory automatically by syncing with major platforms, making sustainability an effortless habit for every household.
            </p>
            <div className="flex gap-4">
               <Globe className="text-emerald-600 w-6 h-6" />
               <Heart className="text-emerald-600 w-6 h-6" />
               <Target className="text-emerald-600 w-6 h-6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
