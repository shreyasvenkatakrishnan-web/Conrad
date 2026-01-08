
import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Standardized Header Section - Matching Mission, Product, and How It Works */}
      <section className="bg-emerald-950 py-24 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Invest in Your Future</h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto leading-relaxed">
            Choose a plan that fits your household's needs. Every plan contributes to our global food recovery initiatives.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className={`grid gap-8 ${PRICING_TIERS.length === 2 ? 'lg:grid-cols-2 max-w-5xl mx-auto' : 'lg:grid-cols-3'}`}>
          {PRICING_TIERS.map((tier) => {
            const [priceVal, period] = tier.price.split('/');
            const displayPeriod = period === 'yr' ? 'year' : 'month';
            
            return (
              <div 
                key={tier.name} 
                className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-300 ${
                  tier.highlighted 
                    ? 'bg-emerald-900 text-white border-emerald-900 shadow-2xl scale-105 z-10' 
                    : 'bg-white text-slate-900 border-emerald-100 hover:border-emerald-300 shadow-lg'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400 text-emerald-950 text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    1 Month Free Trial
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-emerald-400' : 'text-emerald-900'}`}>
                    {tier.name}
                  </h3>
                  <p className={`${tier.highlighted ? 'text-emerald-100/70' : 'text-slate-500'}`}>
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-black">{priceVal}</span>
                  {period && (
                    <span className={`text-lg ml-1 ${tier.highlighted ? 'text-emerald-300' : 'text-slate-400'}`}>
                      / {displayPeriod}
                    </span>
                  )}
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${tier.highlighted ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-bold transition-all ${
                  tier.highlighted 
                    ? 'bg-emerald-400 text-emerald-950 hover:bg-emerald-300 shadow-lg hover:shadow-emerald-400/20' 
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}>
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center bg-emerald-50 p-12 rounded-[2rem] border border-emerald-100 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Don't see what you need?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            We offer specialized solutions for non-profits, schools, and large-scale catering services.
          </p>
          <a href="#" className="text-emerald-600 font-bold hover:underline">Get a Custom Quote &rarr;</a>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
