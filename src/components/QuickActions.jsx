import React from 'react';
import { Plus, Compass, MapPin } from 'lucide-react';

function ActionCard({ icon: Icon, title, desc }) {
  return (
    <button className="group flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:-translate-y-0.5 hover:bg-white/10">
      <span className="rounded-xl bg-white/10 p-2 text-white/90"><Icon className="h-5 w-5" /></span>
      <span>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-xs text-white/70">{desc}</div>
      </span>
    </button>
  );
}

export default function QuickActions() {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <ActionCard icon={Plus} title="Create Trip" desc="Set destination, dates, and preferences" />
        <ActionCard icon={Compass} title="Discover Trips" desc="Browse nearby and trending plans" />
        <ActionCard icon={MapPin} title="Nearby Experiences" desc="Treks, food walks, tours" />
      </div>
    </section>
  );
}
