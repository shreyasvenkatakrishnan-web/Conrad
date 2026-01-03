
import React, { useState } from 'react';
import { 
  Zap, 
  Send, 
  Loader2, 
  Calendar, 
  ShoppingCart, 
  BarChart3, 
  AlertCircle,
  Clock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { getSmartSaverAdvice } from '../geminiService';

const Product: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAiAdvice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    
    setIsLoading(true);
    setAiResponse(null);
    const result = await getSmartSaverAdvice(userInput);
    setAiResponse(result);
    setIsLoading(false);
  };

  const expiries = [
    { day: 'Mon', date: '12', items: [{ name: 'Whole Milk', type: 'urgent' }] },
    { day: 'Tue', date: '13', items: [{ name: 'Chicken Breast', type: 'warning' }] },
    { day: 'Wed', date: '14', items: [{ name: 'Sourdough Bread', type: 'safe' }] },
    { day: 'Thu', date: '15', items: [{ name: 'Greek Yogurt', type: 'warning' }] },
    { day: 'Fri', date: '16', items: [{ name: 'Mixed Greens', type: 'urgent' }] },
    { day: 'Sat', date: '17', items: [{ name: 'Large Eggs', type: 'safe' }] },
    { day: 'Sun', date: '18', items: [] },
  ];

  return (
    <div className="pb-24">
      {/* Product Hero */}
      <section className="bg-white py-20 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-emerald-100 text-emerald-700 rounded-lg">
                Feature Spotlight: Toss No More
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-6">Introducing WasteLess</h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                WasteLess is a seamless feature integrated into your grocery platforms. It automatically tracks your pantry and alerts you before items expire—no manual logging required.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <Zap className="w-6 h-6 text-emerald-600 mb-2" />
                  <span className="text-sm font-bold text-emerald-900">Easy Tracking</span>
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <ShoppingCart className="w-6 h-6 text-emerald-600 mb-2" />
                  <span className="text-sm font-bold text-emerald-900">Checkout Alerts</span>
                </div>
              </div>
            </div>
            
            {/* Interactive Calendar View */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-[2.5rem] blur-xl"></div>
              <div className="relative bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden">
                {/* Calendar Header */}
                <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      Expiry Calendar
                    </h3>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">October 2024</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all text-slate-400">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all text-slate-400">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-7 gap-4">
                    {expiries.map((day, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase mb-2">{day.day}</span>
                        <div className={`w-full aspect-square rounded-2xl flex flex-col items-center justify-center relative transition-all ${day.date === '12' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : 'bg-slate-50 hover:bg-slate-100 border border-transparent hover:border-slate-200'}`}>
                          <span className="text-sm font-bold">{day.date}</span>
                          {day.items.length > 0 && (
                            <div className="absolute -bottom-1 flex gap-1">
                              {day.items.map((_, i) => (
                                <div key={i} className={`w-1.5 h-1.5 rounded-full ${day.date === '12' ? 'bg-white' : 'bg-emerald-500'}`}></div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* List View of the selected day or upcoming */}
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                      <span>Upcoming Waste Alerts</span>
                      <Clock className="w-3 h-3" />
                    </div>
                    {expiries.filter(d => d.items.length > 0).slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group/item">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          d.items[0].type === 'urgent' ? 'bg-red-100 text-red-600' : 
                          d.items[0].type === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
                        }`}>
                          <AlertCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-sm font-bold text-slate-900">{d.items[0].name}</h4>
                          <p className="text-xs text-slate-500">Expiring {d.day === 'Mon' ? 'Today' : `in ${i + 1} days`}</p>
                        </div>
                        <div className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter ${
                          d.items[0].type === 'urgent' ? 'bg-red-100 text-red-600' : 
                          d.items[0].type === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
                        }`}>
                          {d.items[0].type === 'urgent' ? 'Toss Soon' : d.items[0].type === 'warning' ? 'Check' : 'Eat First'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-950 mb-4">Scalable Sustainability</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Designed for both individual households and forward-thinking retailers to lower emissions and save money.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <ShoppingCart className="w-8 h-8 text-emerald-600" />, 
              title: "Pre-Purchase Alerts", 
              desc: "Instantly see if you're adding a duplicate to your cart while you shop online." 
            },
            { 
              icon: <Calendar className="w-8 h-8 text-emerald-600" />, 
              title: "Calendar View", 
              desc: "A digital timeline of your household food inventory and upcoming expiration dates." 
            },
            { 
              icon: <BarChart3 className="w-8 h-8 text-emerald-600" />, 
              title: "Retailer Integrated", 
              desc: "A scalable solution for platforms to help their customers reduce spoilage and waste." 
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-white border border-emerald-50 rounded-3xl hover:shadow-lg transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-emerald-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant Demo */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Smart Management</h2>
            <p className="text-emerald-200/80 mb-8 max-w-lg mx-auto">Ask our AI to suggest recipes based on your upcoming expiries.</p>
            
            <form onSubmit={handleAiAdvice} className="relative mb-8">
              <input 
                type="text" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="What should I cook with expiring milk?"
                className="w-full bg-slate-800 border border-slate-700 rounded-full py-4 px-6 pr-16 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-white text-center"
              />
              <button 
                disabled={isLoading}
                className="absolute right-2 top-2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-400 transition-colors disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>

            {aiResponse && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                <p className="text-emerald-50 leading-relaxed italic text-sm">{aiResponse}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
