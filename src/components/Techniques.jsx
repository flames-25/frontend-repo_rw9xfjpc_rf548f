import { Grip, Hand, Footprints, Timer } from 'lucide-react';

const techniques = [
  {
    icon: Grip,
    title: 'Body Positioning',
    desc: 'Hips to the wall, straight arms, and efficient weight transfer keep your energy for the crux.'
  },
  {
    icon: Hand,
    title: 'Grip Types',
    desc: 'Open-hand, crimp, pinch, and sloper basics with safety cues to protect your fingers.'
  },
  {
    icon: Footprints,
    title: 'Footwork',
    desc: 'Quiet feet, precise placements, and using edges/smears to move with confidence.'
  },
  {
    icon: Timer,
    title: 'Pacing & Resting',
    desc: 'Finding rests, shaking out properly, and breathing to steady your heart rate.'
  },
];

export default function Techniques() {
  return (
    <section id="techniques" className="py-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Techniques</h2>
            <p className="mt-2 text-gray-600">Simple explanations with cues you can remember on the wall.</p>
          </div>
          <a href="#beginners" className="text-emerald-700 hover:text-emerald-800 font-medium">Jump to Beginners</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techniques.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition-shadow">
              <Icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
