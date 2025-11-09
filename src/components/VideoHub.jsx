import { Video, ExternalLink } from 'lucide-react';

const sections = [
  {
    title: 'Technique Videos',
    description: 'Short lessons that reinforce fundamentals and drills you can try in your next session.',
    links: [
      { label: 'Footwork: Silent Feet Drill', url: 'https://www.youtube.com/watch?v=3mWwz3bGu0Q' },
      { label: 'Flagging Basics', url: 'https://www.youtube.com/watch?v=3D5kXo0VxwM' },
      { label: 'Finding and Using Rests', url: 'https://www.youtube.com/watch?v=3wD3wO9yY5s' }
    ]
  },
  {
    title: 'Shoes & Fit',
    description: 'How to choose the right shape and stiffness for your style and terrain.',
    links: [
      { label: 'Choosing Climbing Shoes', url: 'https://www.youtube.com/watch?v=7Wv0cP1m9qI' },
      { label: 'Break-in and Care Tips', url: 'https://www.youtube.com/watch?v=m6Qf2l2G1yA' }
    ]
  },
  {
    title: 'Chalk & Skin Care',
    description: 'Get the most from your chalk while taking care of your hands.',
    links: [
      { label: 'Loose vs Liquid Chalk', url: 'https://www.youtube.com/watch?v=vJqI-0o3H6w' },
      { label: 'Post-Session Skin Routine', url: 'https://www.youtube.com/watch?v=3h6m7o0o5R8' }
    ]
  }
];

export default function VideoHub() {
  return (
    <section id="videos" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Video Library</h2>
            <p className="mt-2 text-gray-600">Curated clips for techniques, shoe selection, and chalk usage.</p>
          </div>
          <Video className="hidden md:block h-8 w-8 text-emerald-600" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((sec) => (
            <article key={sec.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">{sec.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{sec.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {sec.links.map((l) => (
                  <li key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
