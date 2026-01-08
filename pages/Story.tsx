
import React from 'react';
import { Globe, Target, ShieldCheck } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Standardized Header Section - Matching Mission, Product, and How It Works */}
      <section className="bg-emerald-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our Story</h1>
          <p className="text-xl text-emerald-200 max-w-4xl mx-auto leading-relaxed">
            Building a bridge between technology and global food security.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-emerald lg:prose-xl max-w-none">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8 text-center">
            One wasted apple sparked a global mission.
          </h2>
          
          <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
            <p>
              Our founders, Sujit Sathyamurthi and Shreyas Venkatakrishnan, are deeply passionate about STEM and driven by a shared goal to help the community. Our journey with Redooste started with a simple but frustrating realization: food waste is a silent crisis in every household. We noticed how fresh produce and other items like cereal sat in our pantries, left forgotten until they expired and were thrown away
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center my-16 bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100">
              <div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-emerald-600" /> 
                  A Global Perspective
                </h3>
                <p>
                  Our motivation was fueled by our awareness of global food waste and our personal experiences witnessing food starvation in India. Seeing the stark contrast between abundance wasted at home and the scarcity faced by others convinced us that we needed to act.
                </p>
              </div>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800" 
                  alt="Technology and Community" 
                  className="rounded-2xl shadow-xl transition-transform group-hover:scale-105 duration-500" 
                />
              </div>
            </div>

            <p>
              Combining our past experiences in coding and app building as well as our scientific foundation, we set out to develop <strong>WasteLess</strong>. We learned how decomposing food generates significant greenhouse gas emissions, turning a household annoyance into a serious climate issue.
            </p>

            <p className="text-center font-medium text-emerald-800">
              Today, WasteLess is more than just a software; it's our contribution to a worldwide effort to combat food waste. We believe that by making it easier for households and retailers to track their inventory, we can create a measurable impact on the health of our planet and our communities.
            </p>
          </div>
        </div>

        {/* Vision & Values Boxes */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 px-4">
          <div className="p-10 bg-white rounded-[2.5rem] border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              Our vision is to build a sustainable future by empowering the world with the tools to eliminate avoidable food waste. Furthermore, we aim to mitigate global greenhouse gas emissions, and bridge the gap between food abundance and scarcity to support a healthier planet for all.
            </p>
          </div>

          <div className="p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Values</h3>
            <ul className="space-y-3 text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                Sustainability as a standard, not an option.
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                Innovation through STEM-driven empathy.
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                Empowering communities with better data.
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                Integrity in every line of software we write.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-emerald-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-3xl font-bold mb-6">Promoting smarter food management with the power of STEM.</h2>
        </div>
      </section>
    </div>
  );
};

export default Story;
