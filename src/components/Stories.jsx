import { useState } from 'react';
import { Send } from 'lucide-react';

function StoryCard({ story }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-900">{story.name}</h4>
        <span className="text-xs text-gray-500">{new Date(story.date).toLocaleDateString()}</span>
      </div>
      <p className="mt-2 text-gray-700 text-sm whitespace-pre-line">{story.content}</p>
    </article>
  );
}

export default function Stories() {
  const [stories, setStories] = useState([
    {
      id: 1,
      name: 'Ava C.',
      date: new Date().toISOString(),
      content: 'Finally sent my first V3! Focusing on flagging and breathing made a huge difference.'
    },
    {
      id: 2,
      name: 'Liam R.',
      date: new Date(Date.now() - 86400000).toISOString(),
      content: 'Lead climbing felt scary at first, but practicing clipping and resting kept me calm.'
    }
  ]);

  const [form, setForm] = useState({ name: '', content: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.content.trim()) return;
    const newStory = {
      id: stories.length + 1,
      name: form.name.trim(),
      content: form.content.trim(),
      date: new Date().toISOString()
    };
    setStories([newStory, ...stories]);
    setForm({ name: '', content: '' });
  };

  return (
    <section id="stories" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Community Stories</h2>
          <p className="mt-2 text-gray-600">Share milestones, tips, or lessons learned. Your story can help someone else climb better.</p>
        </div>

        <form onSubmit={onSubmit} className="mb-8 grid gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <div className="grid md:grid-cols-3 gap-3">
            <input
              className="md:col-span-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-sm px-3 py-2 bg-white"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <textarea
              className="md:col-span-2 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-sm px-3 py-2 min-h-[90px] bg-white"
              placeholder="What did you learn or experience?"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <Send className="h-4 w-4" />
              Post Story
            </button>
          </div>
        </form>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
