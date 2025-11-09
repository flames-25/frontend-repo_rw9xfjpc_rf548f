import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-16 pb-16 md:pt-24 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Learn, Train, and Share your climbing journey
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Practical technique guides, curated drills, and real stories from climbers like you. Build solid fundamentals and push your grade with confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#beginners" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                Start as a Beginner
              </a>
              <a href="#techniques" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                <PlayCircle className="h-4 w-4" /> Explore Techniques
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-gray-200 bg-white shadow-sm p-4">
              <div className="grid grid-cols-3 gap-2 h-full">
                <img src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3VsZGVyaW5nfGVufDB8MHx8fDE3NjI3MjE1NDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Bouldering" className="object-cover w-full h-full rounded-md" />
                <img src="https://images.unsplash.com/photo-1525811902-f2342640856e?q=80&w=1280&auto=format&fit=crop" alt="Lead climbing" className="object-cover w-full h-full rounded-md" />
                <img src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1280&auto=format&fit=crop" alt="Outdoor" className="object-cover w-full h-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
