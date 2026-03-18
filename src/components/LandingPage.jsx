import React from 'react';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/sdlc_premium_bg.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30 scale-110 animate-morph"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
      </div>

      {/* Animated Particles / Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-lavender/10 blur-3xl animate-float-random"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        {/* Geometric Accents */}
        <div className="absolute top-1/4 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-lavender/40 to-transparent rotate-45 animate-scan" />
        <div className="absolute bottom-1/4 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent -rotate-45 animate-scan-delayed" />
      </div>

      <div className="relative z-10 max-w-6xl px-6 text-center">
        <div className="flex flex-col items-center">
          {/* Staggered Reveal Content */}
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-lavender/20 bg-lavender/5 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="w-1.5 h-1.5 rounded-full bg-lavender animate-pulse" />
            <span className="text-lavender text-[10px] font-black uppercase tracking-[0.3em]">
              Next-Gen Engineering Experience
            </span>
          </div>

          <h1 className="text-[clamp(3rem,12vw,8rem)] font-black text-white uppercase tracking-tighter mb-8 leading-[0.8] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Design. <span className="text-gradient">Deploy.</span> <br />
            <span className="opacity-50">Domin8.</span>
          </h1>

          <p className="text-xl md:text-3xl text-slate-400 max-w-3xl mx-auto mb-14 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            The ultimate visual simulator for orchestrating professional software lifecycles in the modern era.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-400">
            <button 
              onClick={onGetStarted}
              className="group relative px-14 py-7 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-lavender/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-4">
                Enter Simulation
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="group px-12 py-6 rounded-2xl border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/5 hover:border-white/30 transition-all flex items-center gap-3">
              Explore Docs
              <div className="w-2 h-2 rounded-full bg-white opacity-20 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-700">
          {[
            { label: 'Models Supported', val: '09', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
            { label: 'Cloud Compute', val: '24/7', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
            { label: 'Verified Experts', val: '1.2k', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { label: 'System Uptime', val: '99.9%', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 flex flex-col items-center group cursor-default hover:border-lavender/50">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-lavender group-hover:text-white transition-all text-lavender">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <span className="text-3xl font-black text-white block mb-1">{stat.val}</span>
              <span className="text-[8px] text-slate-500 uppercase font-black tracking-[0.2em]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Gradient Fog */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-slate-950 to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
    </div>
  );
};

export default LandingPage;
