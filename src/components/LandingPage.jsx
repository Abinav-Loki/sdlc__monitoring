import React from 'react';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/sdlc_premium_bg.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-lavender/10 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full animate-float-delayed" />

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <div className="animate-in fade-in slide-in-from-top-12 duration-1000">
          <span className="text-lavender text-[10px] font-black uppercase tracking-[0.4em] mb-4 block animate-bounce-subtle">
            Advanced Software Engineering Portal
          </span>
          <h1 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
            Master the <span className="text-gradient">Lifecycle.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            The industry's most high-fidelity platform for simulating, analyzing, and benchmarking modern software development methodologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onGetStarted}
              className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-lavender/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-3">
                Get Started
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="px-10 py-5 rounded-2xl border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          {[
            { label: 'Methodologies', val: '9+' },
            { label: 'Simulations Run', val: '12K' },
            { label: 'Active Learners', val: '4.5K' },
            { label: 'Accuracy', val: '99%' }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <span className="text-3xl md:text-4xl font-black text-white block mb-1 group-hover:text-lavender transition-colors">{stat.val}</span>
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Branding */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Abinav-Loki / SDLC Monitoring</p>
      </div>
    </div>
  );
};

export default LandingPage;
