
import React from 'react';
import { Target, Heart, Globe, AlertTriangle, Zap, ShoppingBag, ShieldCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Households', value: 43 },
  { name: 'Retail', value: 18 },
  { name: 'Production', value: 24 },
  { name: 'Logistics', value: 15 },
];

const COLORS = ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0'];

const Mission: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-emerald-50 py-20 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-6">Our Mission</h1>
          <p className="text-xl text-emerald-800 max-w-4xl mx-auto leading-relaxed">
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
            <h3 className="text-xl font-bold text-emerald-900 mb-6 text-center">Food Waste Distribution (%)</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: '#f0fdf4'}}
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-400 mt-6 text-center">
              Source: Global Sustainability Index 2024. Households remain the largest contributors.
            </p>
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
