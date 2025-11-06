import React from 'react';

export default function FooterCTA() {
  return (
    <footer className="mx-auto my-16 max-w-6xl px-6">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-indigo-600/10 to-transparent p-8 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-white">Ready to explore together?</h3>
        <p className="mt-2 text-sm text-white/80">Create your profile and start matching with travellers today.</p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <a href="#signup" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0B0F1A] shadow hover:opacity-90">Get Started</a>
          <a href="#learn" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Learn More</a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} GoTogether. Travel safer, together.</p>
    </footer>
  );
}
