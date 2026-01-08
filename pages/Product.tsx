
import React from 'react';
import { 
  Zap, 
  Calendar, 
  ShoppingCart, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft,
  Milk as MilkIcon,
  Egg as EggIcon,
  Beef,
  Apple,
  Cookie,
  Ham,
  AlertTriangle,
  ShoppingBag,
  Search,
  Bell,
  RefreshCcw,
  Fish,
  Plus,
  Store,
  Sparkles,
  Scan,
  Utensils,
  Wallet,
  MessageSquare,
  MoreVertical
} from 'lucide-react';

/**
 * HIGH-FIDELITY RECREATION: MAIN DASHBOARD (FROM SCREENSHOT)
 */
const DashboardMockup: React.FC = () => {
  return (
    <div className="w-full max-w-[800px] bg-[#f8fafc] rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden flex flex-col p-8 text-slate-900 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight mb-1">Dashboard</h2>
          <p className="text-xs text-slate-400 font-bold">Helping you shop smarter and manage your pantry efficiently.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#10b981] hover:bg-[#059669] text-white px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 transition-colors shadow-lg shadow-emerald-100">
            <Sparkles className="w-3.5 h-3.5 fill-current" /> Ask AI Assistant
          </button>
          <div className="relative p-2.5 bg-white border border-slate-100 rounded-xl shadow-sm cursor-pointer">
            <Bell className="w-4 h-4 text-slate-400" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white">2</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-4 space-y-6">
          {/* Expiring Soon */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-black text-slate-800">Expiring Soon</h3>
              <span className="text-[9px] font-black bg-[#f0fdf4] text-[#10b981] px-2 py-1 rounded-md border border-[#d1fae5]">2 ITEMS</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                  <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover p-1" alt="Yogurt" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-xs font-black text-slate-800">Greek Yogurt</h4>
                  <p className="text-[10px] text-slate-400 font-bold">2 packages</p>
                </div>
                <span className="text-[10px] font-black text-amber-500 bg-amber-50 px-2 py-1 rounded-lg">in 3d</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                  <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover p-1" alt="Bread" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-xs font-black text-slate-800">Bread</h4>
                  <p className="text-[10px] text-slate-400 font-bold">3 packages</p>
                </div>
                <span className="text-[10px] font-black text-amber-500 bg-amber-50 px-2 py-1 rounded-lg">in 3d</span>
              </div>
            </div>
            <button className="w-full mt-8 text-[11px] font-black text-[#10b981] hover:underline text-center">Manage Inventory</button>
          </div>

          {/* Weekly Budget */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative">
            <div className="flex justify-between items-center mb-4">
              <div className="w-10 h-10 bg-[#f0fdf4] rounded-xl flex items-center justify-center">
                <Wallet className="w-5 h-5 text-[#10b981]" />
              </div>
              <span className="text-[9px] font-black bg-[#f0fdf4] text-[#10b981] px-2 py-1 rounded-md border border-[#d1fae5]">GOOD</span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Weekly Budget</p>
            <div className="flex items-baseline gap-1.5 mb-6">
              <span className="text-3xl font-black text-slate-900">$0.00</span>
              <span className="text-xs font-bold text-slate-300">/ $150</span>
            </div>
            <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
              <div className="w-[5%] h-full bg-[#10b981] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-8 space-y-6">
          {/* Tile Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-5">
              <div className="w-12 h-12 bg-[#10b981] rounded-2xl flex items-center justify-center shrink-0">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-800">Shop Products</h4>
                <p className="text-[10px] text-slate-400 font-bold">Find smart options and deals</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-5">
              <div className="w-12 h-12 bg-[#065f46] rounded-2xl flex items-center justify-center shrink-0">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-800">Scan Receipt</h4>
                <p className="text-[10px] text-slate-400 font-bold">Instantly import history</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-5">
              <div className="w-12 h-12 bg-[#10b981] rounded-2xl flex items-center justify-center shrink-0">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-800">Meal Planner</h4>
                <p className="text-[10px] text-slate-400 font-bold">AI optimized menu</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-5">
              <div className="w-12 h-12 bg-[#10b981] rounded-2xl flex items-center justify-center shrink-0">
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-800">Favorite Stores</h4>
                <p className="text-[10px] text-slate-400 font-bold">Compare local pricing</p>
              </div>
            </div>
          </div>

          {/* Nutrition Stats */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-black text-slate-800">Shopping Cart Nutrition</h3>
              <button className="text-[10px] font-black text-[#10b981] uppercase tracking-widest">Edit Goals</button>
            </div>
            <div className="grid grid-cols-4 gap-8">
              {['CALORIES', 'PROTEIN', 'CARBS', 'FAT'].map((label, idx) => (
                <div key={label} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-400 tracking-tighter">{label}</span>
                    <span className="text-[10px] font-black text-slate-300">0%</span>
                  </div>
                  <div className="h-1 bg-slate-50 rounded-full w-full"></div>
                  <p className="text-[10px] font-black text-slate-900">0 <span className="text-slate-300 uppercase">{idx === 0 ? 'Kcal' : 'G'} / {['2000Kcal', '150G', '250G', '67G'][idx]}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="mt-10 bg-[#0f172a] rounded-[2rem] p-8 flex items-center justify-between">
        <div>
          <h4 className="text-lg font-black text-white mb-1">Help us grow WasteLess</h4>
          <p className="text-xs text-slate-400 max-w-md">Your feedback helps us build a more efficient software for everyone. Share your thoughts on how we can improve.</p>
        </div>
        <button className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-3 rounded-2xl text-xs font-black flex items-center gap-2.5 shadow-lg shadow-emerald-500/20 transition-all">
          <MessageSquare className="w-4 h-4" /> Give Feedback
        </button>
      </div>
    </div>
  );
};

/**
 * HIGH-FIDELITY RECREATION: RETAILER SHOP
 */
const RetailerShopMockup: React.FC = () => {
  const categories = [
    { label: 'All Items', active: true, icon: null },
    { label: 'Produce', active: false, icon: <Apple className="w-3 h-3" /> },
    { label: 'Meat', active: false, icon: <Beef className="w-3 h-3" /> },
    { label: 'Dairy', active: false, icon: <MilkIcon className="w-3 h-3" /> },
    { label: 'Seafood', active: false, icon: <Fish className="w-3 h-3" /> },
    { label: 'Bakery', active: false, icon: <Cookie className="w-3 h-3" /> },
  ];

  const products = [
    {
      name: 'Organic Bananas',
      price: '$2.99',
      oldPrice: '$4.49',
      store: 'Whole Foods',
      kcal: '105 kcal',
      protein: '1g protein',
      tags: ['ORGANIC', 'SALE'],
      img: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Rice',
      price: '$3.99',
      store: "Kroger",
      kcal: '200 kcal',
      protein: '4g protein',
      tags: [],
      img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div className="w-full bg-[#f8fafc] rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in fade-in slide-in-from-right-8 duration-1000">
      {/* Header */}
      <div className="p-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-black text-[#1e293b]">Shop</h2>
        <div className="flex-grow max-w-md relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search items..." 
            className="w-full bg-white border border-slate-200 rounded-2xl py-3 px-12 text-sm focus:outline-none shadow-sm"
            readOnly
          />
        </div>
        <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-sm">
          <Bell className="w-5 h-5 text-slate-400" />
        </div>
      </div>

      <div className="px-6 space-y-8 pb-10">
        <section>
          <h3 className="text-md font-black text-[#1e293b] mb-4">Purchase Recommendations</h3>
          <div className="bg-[#f0fdf4]/80 border border-emerald-100 rounded-3xl p-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full -mr-20 -mt-20"></div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-black bg-[#dcfce7] text-[#059669] px-2.5 py-1 rounded-md uppercase tracking-widest border border-emerald-100">Cereal</span>
              <div className="flex items-center gap-1.5 text-[9px] font-black text-[#059669] uppercase tracking-widest italic">
                <RefreshCcw className="w-3 h-3" /> REPLENISH
              </div>
            </div>
            <h4 className="font-black text-[#1e293b] text-lg mb-1">Organic Rice</h4>
            <p className="text-[11px] text-slate-500 italic leading-relaxed mb-6 max-w-[85%]">
              "You are running low on Rice. Based on your consumption patterns, you typically replenish every 14 days."
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-black text-[#1e293b]">$3.99</span>
              <button className="bg-[#0f172a] text-white px-5 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2.5 shadow-lg shadow-slate-200">
                <ShoppingCart className="w-4 h-4" /> Add to List
              </button>
            </div>
          </div>
        </section>

        <div className="flex gap-4 overflow-x-hidden">
          {categories.slice(0, 4).map((cat, i) => (
            <button 
              key={i} 
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border whitespace-nowrap text-[11px] font-black transition-all ${
                cat.active ? 'bg-[#059669] border-[#059669] text-white shadow-xl shadow-emerald-100' : 'bg-white border-slate-200 text-slate-500 hover:border-emerald-200'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <span className="px-4 py-1.5 bg-white border border-slate-100 rounded-full text-[10px] font-bold text-slate-400">On Sale</span>
          <span className="px-4 py-1.5 bg-white border border-slate-100 rounded-full text-[10px] font-bold text-slate-400">Organic</span>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {products.map((p, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 p-4 shadow-sm group hover:shadow-md transition-shadow">
              <div className="aspect-square rounded-[1.5rem] overflow-hidden mb-4 relative bg-slate-50">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {p.tags.map(tag => (
                    <span key={tag} className={`text-[8px] font-black px-2 py-1 rounded-[6px] border ${tag === 'SALE' ? 'bg-[#ef4444] text-white border-[#ef4444]' : 'bg-[#059669] text-white border-[#059669]'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h5 className="text-[13px] font-black text-[#1e293b] mb-1">{p.name}</h5>
              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-[14px] font-black text-[#1e293b]">{p.price}</span>
                {p.oldPrice && <span className="text-[11px] text-slate-400 line-through font-bold">{p.oldPrice}</span>}
              </div>
              <p className="text-[9px] text-slate-400 font-black flex items-center gap-1.5 mb-4 uppercase tracking-tight">
                <Store className="w-3 h-3" /> {p.store}
              </p>
              <div className="flex gap-2 mb-5">
                <span className="bg-[#f1f5f9] text-slate-500 px-2 py-1 rounded-[6px] text-[8px] font-black uppercase tracking-widest">{p.kcal}</span>
                <span className="bg-[#f0fdf4] text-[#059669] px-2 py-1 rounded-[6px] text-[8px] font-black uppercase tracking-widest">{p.protein}</span>
              </div>
              <button className="w-full py-3 bg-[#0f172a] text-white rounded-2xl text-[10px] font-black flex items-center justify-center gap-2 shadow-lg shadow-slate-100 active:scale-95 transition-transform">
                <Plus className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * HIGH-FIDELITY RECREATION: ANTI-DUPLICATE WARNING
 */
const PrePurchaseAlertMockup: React.FC = () => {
  return (
    <div className="w-full max-w-[360px] mx-auto bg-white border border-slate-100 rounded-[3rem] shadow-2xl p-8 text-center animate-in fade-in zoom-in duration-700">
      <div className="w-16 h-16 bg-[#f0fdf4] rounded-2xl flex items-center justify-center mx-auto mb-6">
        <AlertTriangle className="w-8 h-8 text-[#059669]" />
      </div>

      <h3 className="text-3xl font-black text-[#1e293b] mb-3">Warning</h3>
      
      <p className="text-[13px] text-slate-400 font-bold leading-relaxed mb-8 px-2">
        You already have these items at home. Review your cart to minimize waste and save money.
      </p>

      <div className="bg-[#f8fafc] border border-slate-50 rounded-[2.5rem] p-4 mb-8">
        <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm flex flex-col">
          <div className="w-full h-40 bg-slate-50 border-b border-slate-100 overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=600" 
               alt="Apples" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="p-5 text-left space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm font-black text-[#1e293b] uppercase tracking-tighter">APPLES</h4>
                <p className="text-[11px] font-bold text-slate-400">In-Home Inventory</p>
              </div>
              <div className="bg-[#f0fdf4] text-[#059669] px-2.5 py-1 rounded-lg text-[9px] font-black border border-[#d1fae5]">
                EXPIRES 01/08
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-50">
               <span className="text-[11px] font-black text-[#1e293b]">Current Stock</span>
               <span className="text-[11px] font-black text-[#059669]">4 PIECES</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full py-4.5 bg-[#f1f5f9] text-[#475569] font-black text-xs rounded-xl hover:bg-slate-200 transition-colors">
          Review my cart
        </button>
        <button className="w-full py-4.5 bg-[#059669] text-white font-black text-xs rounded-xl hover:bg-emerald-700 transition-shadow shadow-xl shadow-emerald-100 active:scale-95 duration-200">
          Continue anyway
        </button>
      </div>
    </div>
  );
};

/**
 * HIGH-FIDELITY RECREATION: EXPIRY CALENDAR
 */
const CalendarViewMockup: React.FC = () => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const calendarData = [
    { date: '', items: [] }, { date: '', items: [] }, { date: '', items: [] }, { date: '', items: [] },
    { date: '1', items: [] }, { date: '2', items: [] }, { date: '3', items: [] },
    { date: '4', items: [] },
    { date: '5', items: [{ name: 'Milk', color: 'bg-[#ef4444]', icon: <MilkIcon className="w-3 h-3" />, count: 1 }] },
    { date: '6', items: [], isToday: true },
    { date: '7', items: [] },
    { date: '8', items: [{ name: 'Eggs', color: 'bg-[#eab308]', icon: <EggIcon className="w-3 h-3" />, count: 1 }] },
    { date: '9', items: [] },
    { date: '10', items: [] },
    { date: '11', items: [] },
    { date: '12', items: [{ name: 'Bread', color: 'bg-[#22c55e]', icon: <Cookie className="w-3 h-3" />, count: 1 }] },
    { date: '13', items: [] },
    { date: '14', items: [{ name: 'Oatmeal', color: 'bg-[#22c55e]', icon: <Ham className="w-3 h-3" />, count: 1 }] },
    { date: '15', items: [{ name: 'Ground Beef', color: 'bg-[#22c55e]', icon: <Beef className="w-3 h-3" />, count: 1 }] },
    { date: '16', items: [] },
    { date: '17', items: [{ name: 'Apples', color: 'bg-[#22c55e]', icon: <Apple className="w-3 h-3" />, count: 1 }] },
    { date: '18', items: [] }, { date: '19', items: [] }, { date: '20', items: [] }, { date: '21', items: [] },
    { date: '22', items: [] }, { date: '23', items: [] }, { date: '24', items: [] },
    { date: '25', items: [] }, { date: '26', items: [] }, { date: '27', items: [] }, { date: '28', items: [] },
    { date: '29', items: [] }, { date: '30', items: [] }, { date: '31', items: [] }
  ];

  return (
    <div className="relative bg-white border border-slate-200 rounded-[3rem] shadow-2xl overflow-hidden p-8 md:p-10 animate-in fade-in zoom-in duration-700">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-5">
          <button className="p-3 border border-slate-100 rounded-full text-slate-300 hover:bg-slate-50 transition-colors shadow-sm">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h3 className="text-2xl font-black text-[#1e293b] tracking-tight">Expiry Calendar</h3>
            <p className="text-[12px] text-slate-400 font-bold uppercase tracking-[0.15em]">Food Shelf Life Data</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 py-2.5 rounded-2xl border border-slate-100 shadow-sm">
          <ChevronLeft className="w-4 h-4 text-slate-300 cursor-pointer" />
          <span className="font-black text-[#1e293b] text-sm px-2">January 2026</span>
          <ChevronRight className="w-4 h-4 text-slate-300 cursor-pointer" />
        </div>
      </div>

      <div className="border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-inner bg-slate-50/20">
        <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50/50">
          {days.map(day => (
            <div key={day} className="py-4 text-center text-[10px] font-black text-slate-400 tracking-widest">{day}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7">
          {calendarData.map((day, idx) => (
            <div key={idx} className="aspect-[4/3] border-r border-b border-slate-100 p-2 relative group hover:bg-white transition-colors">
              <div className="flex justify-start">
                <span className={`text-[12px] font-black ${day.isToday ? 'w-6 h-6 flex items-center justify-center bg-[#2563eb] text-white rounded-[8px] shadow-lg shadow-blue-100' : 'text-slate-300'}`}>
                  {day.date}
                </span>
              </div>
              
              {day.items.map((item, i) => (
                <div key={i} className={`mt-1.5 px-2 py-1 rounded-[6px] ${item.color} text-white flex items-center gap-2 relative shadow-sm`}>
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="text-[9px] font-black uppercase tracking-tight truncate">{item.name}</span>
                  <div className="absolute -top-1.5 -right-1.5 bg-[#dbeafe] text-[#2563eb] w-4 h-4 rounded-[4px] flex items-center justify-center text-[8px] font-black border border-white shadow-sm">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ef4444] shadow-sm"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Expired</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#f97316] shadow-sm"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Expiring Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#eab308] shadow-sm"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Expiring Soon (3D)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#22c55e] shadow-sm"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fresh</span>
        </div>
      </div>
    </div>
  );
};

const Product: React.FC = () => {
  return (
    <div className="pb-32 bg-white">
      {/* Standardized Header Section - Matching How It Works */}
      <section className="bg-emerald-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Product</h1>
          <p className="text-xl text-emerald-200 max-w-4xl mx-auto leading-relaxed">
            Discover WasteLess, our passive grocery management ecosystem designed to eliminate food waste effortlessly.
          </p>
        </div>
      </section>

      {/* Meet WasteLess Hero Section - White Background */}
      <section className="bg-white py-32 text-slate-900 overflow-hidden relative border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-500/[0.03] rounded-full blur-[160px] -mr-[500px] -mt-[500px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-left animate-in slide-in-from-left-8 duration-1000">
              <span className="inline-block px-4 py-2 mb-8 text-xs font-black tracking-[0.2em] uppercase bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100">
                Product Showcase: WasteLess
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-emerald-950">Meet WasteLess</h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed mb-12 font-medium">
                The world's first passive grocery management system. Automated tracking, real-time alerts, and zero manual work.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="px-8 py-5 bg-emerald-50 rounded-[2rem] border border-emerald-100 flex items-center gap-4 transition-all hover:shadow-md">
                  <Zap className="w-7 h-7 text-emerald-600" />
                  <span className="font-black text-lg text-emerald-950">Automated Sync</span>
                </div>
                <div className="px-8 py-5 bg-emerald-50 rounded-[2rem] border border-emerald-100 flex items-center gap-4 transition-all hover:shadow-md">
                  <ShoppingBag className="w-7 h-7 text-emerald-600" />
                  <span className="font-black text-lg text-emerald-950">Smart Checkout</span>
                </div>
              </div>
            </div>
            
            {/* Dashboard Mockup in Top Right Area */}
            <div className="hidden lg:block">
              <div className="scale-95 origin-top-right">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Pre-Purchase Alerts Feature */}
        <div className="grid lg:grid-cols-2 gap-32 items-center mb-48">
          <div className="animate-in slide-in-from-left-8 duration-1000">
            <div className="w-20 h-20 bg-emerald-100 rounded-[2.5rem] flex items-center justify-center mb-10 shadow-lg shadow-emerald-50">
              <ShoppingCart className="w-10 h-10 text-emerald-700" />
            </div>
            <h2 className="text-4xl font-black text-emerald-950 mb-8 tracking-tight">Pre-Purchase Alerts</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Stop buying what you already own. WasteLess integrates with your favorite shopping platforms to cross-check your cart against your home inventory in real-time.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-100/30 blur-[120px] -z-10 rounded-full scale-150"></div>
            <PrePurchaseAlertMockup />
          </div>
        </div>

        {/* Expiry Calendar Feature */}
        <div className="grid lg:grid-cols-2 gap-32 items-center mb-48">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-blue-100/30 blur-[120px] -z-10 rounded-full scale-150"></div>
             <CalendarViewMockup />
          </div>
          <div className="order-1 lg:order-2 animate-in slide-in-from-right-8 duration-1000">
            <div className="w-20 h-20 bg-emerald-100 rounded-[2.5rem] flex items-center justify-center mb-10 shadow-lg shadow-emerald-50">
              <Calendar className="w-10 h-10 text-emerald-700" />
            </div>
            <h2 className="text-4xl font-black text-emerald-950 mb-8 tracking-tight">Expiry Calendar</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              A command center for your kitchen. Every item you buy is automatically added to your calendar with estimated shelf lives, providing a visual countdown for your food.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-emerald-900 font-black">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                Color-coded shelf-life tracking
              </div>
              <div className="flex items-center gap-4 text-emerald-900 font-black">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                Urgency notifications for expiring goods
              </div>
              <div className="flex items-center gap-4 text-emerald-900 font-black">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                Auto-removes items after disposal
              </div>
            </div>
          </div>
        </div>

        {/* Retailer Integration Feature */}
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="animate-in slide-in-from-left-8 duration-1000">
            <div className="w-20 h-20 bg-emerald-100 rounded-[2.5rem] flex items-center justify-center mb-10 shadow-lg shadow-emerald-50">
              <BarChart3 className="w-10 h-10 text-emerald-700" />
            </div>
            <h2 className="text-4xl font-black text-emerald-950 mb-8 tracking-tight">Retailer Integration</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Redooste partners with major grocery retailers to embed WasteLess intelligence directly into the shopping experience, offering customers smart, waste-reducing recommendations.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-emerald-100/40 blur-[120px] -z-10 rounded-full scale-150"></div>
             <RetailerShopMockup />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
