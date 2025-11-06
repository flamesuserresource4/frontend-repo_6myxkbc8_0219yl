import React from 'react';
import { Users, Shield, Calendar } from 'lucide-react';

const items = [
  {
    icon: Users,
    title: 'Find buddies',
    desc: 'Match with travellers going to the same destination at the same time.'
  },
  {
    icon: Shield,
    title: 'Safer solo travel',
    desc: 'Share plans with trusted contacts and feel confident on the go.'
  },
  {
    icon: Calendar,
    title: 'Plan together',
    desc: 'Create trips, coordinate dates, and chat in real time.'
  }
];

export default function ValueProps() {
  return (
    <section className="mx-auto mt-12 max-w-6xl px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-indigo-600/20 p-2 text-indigo-400">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
