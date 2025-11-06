import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-2xl bg-[#0B0F1A]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for text readability (doesn't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/40 via-[#0B0F1A]/30 to-[#0B0F1A]/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
          GoTogether
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-white/80">
          Find travel buddies, plan together, and explore safer. Built for solo travellers.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#signup"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
          >
            Sign Up
          </a>
          <a
            href="#login"
            className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            Log In
          </a>
        </div>
      </div>
    </section>
  );
}
