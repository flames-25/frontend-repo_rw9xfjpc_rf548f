import { Footprints, Cloud, Package } from 'lucide-react';

const shoes = [
  {
    name: 'Neutral Fit',
    use: 'All-day comfort, slabs, long sessions',
    tips: [
      'Sized close to street shoe; prioritize comfort.',
      'Flat profile supports foot strength development.',
      'Pair with stiffer midsoles for edging practice.'
    ]
  },
  {
    name: 'Moderate Downturn',
    use: 'Bouldering, sport, mixed terrain',
    tips: [
      'Slightly snugger fit for better precision.',
      'Good balance for edging and smearing.',
      'Rotate with a comfy pair to avoid hot spots.'
    ]
  },
  {
    name: 'Aggressive Downturn',
    use: 'Steep boulders and caves',
    tips: [
      'Tight performance fit; not ideal for warm-ups.',
      'Soft rubber aids toe hooks and smears on volumes.',
      'Use sparingly to protect your feet.'
    ]
  }
];

const chalk = [
  {
    name: 'Loose Chalk',
    icon: Cloud,
    notes: 'Versatile and easy to reapply. Keep in a sealed bag to reduce mess.'
  },
  {
    name: 'Chalk Ball',
    icon: Package,
    notes: 'Great for gyms with dust control policies. Squeezable for just-enough coverage.'
  },
  {
    name: 'Liquid Chalk',
    icon: Cloud,
    notes: 'Long-lasting base layer; apply at start of session or outdoor redpoints.'
  }
];

export default function Gear() {
  return (
    <section id="gear" className="py-16 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Gear Guide</h2>
            <p className="mt-2 text-gray-600">Choose the right tools for the climb. Fit and use matter more than hype.</p>
          </div>
          <Footprints className="hidden md:block h-8 w-8 text-emerald-600" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Climbing Shoes</h3>
            <p className="mt-1 text-sm text-gray-600">Match profile and stiffness to terrain and goals.</p>
            <div className="mt-5 space-y-4">
              {shoes.map((s) => (
                <article key={s.name} className="rounded-xl border border-gray-200 p-5 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{s.name}</h4>
                    <span className="text-xs text-gray-600">{s.use}</span>
                  </div>
                  <ul className="mt-3 text-sm text-gray-700 space-y-1 list-disc list-inside">
                    {s.tips.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Chalk Options</h3>
            <p className="mt-1 text-sm text-gray-600">Grip assistance with different textures and longevity.</p>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {chalk.map((c) => (
                <article key={c.name} className="rounded-xl border border-gray-200 p-5 bg-white shadow-sm">
                  <div className="flex items-center gap-2">
                    <c.icon className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-semibold text-gray-900">{c.name}</h4>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{c.notes}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
