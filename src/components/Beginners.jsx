import { Shield, Footprints, StretchHorizontal, HeartPulse } from 'lucide-react';

const skills = [
  {
    icon: Shield,
    title: 'Safety First',
    points: [
      'Learn how to fall in the gym and spot properly for bouldering.',
      'Check knots, tie-in, and partner checks before every climb.',
      'Understand basic commands and communication.'
    ]
  },
  {
    icon: Footprints,
    title: 'Footwork Basics',
    points: [
      'Place your toe precisely, then shift weight before standing.',
      'Keep hips close; climb with legs more than arms.',
      'Practice silent feet on easy terrain.'
    ]
  },
  {
    icon: StretchHorizontal,
    title: 'Warm-up & Mobility',
    points: [
      'General warm-up for 8–10 minutes until lightly sweating.',
      'Easy traversing and progressive grip loading.',
      'Post-session mobility for shoulders, hips, and calves.'
    ]
  },
  {
    icon: HeartPulse,
    title: 'Progress Plan',
    points: [
      'Pick 2–3 drills and repeat weekly: foot-swap, downclimb, flagging.',
      'Log sessions and celebrate small wins.',
      'Rest days are training too—aim for 2–3 per week.'
    ]
  }
];

export default function Beginners() {
  return (
    <section id="beginners" className="py-16 bg-emerald-50 border-y border-emerald-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Beginners Section: Essential Skills</h2>
        <p className="mt-2 text-gray-700 max-w-2xl">A gentle starting point with the fundamentals every new climber should know before chasing harder grades.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {skills.map(({ icon: Icon, title, points }) => (
            <article key={title} className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-emerald-600" />
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-emerald-200 bg-white p-5">
          <h4 className="font-semibold text-gray-900">Suggested First Session (45–60 min)</h4>
          <ol className="mt-3 space-y-2 text-gray-700 text-sm list-decimal list-inside">
            <li>Warm-up: 8–10 min cardio + mobility.</li>
            <li>Movement: Traverse easy holds for 5–8 min focusing on quiet feet.</li>
            <li>Drills: 3 sets of foot swaps, flagging on easy problems.</li>
            <li>Cool down: Light stretching, hydrate, note takeaways.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
