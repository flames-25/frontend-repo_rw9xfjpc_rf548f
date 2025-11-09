import { Mountain, BookOpen, Users, Package, Video } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
            <Mountain className="h-6 w-6 text-emerald-600" />
            <span>Crux Collective</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#techniques" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              Techniques
            </a>
            <a href="#beginners" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
              <Users className="h-4 w-4" />
              Beginners
            </a>
            <a href="#gear" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
              <Package className="h-4 w-4" />
              Gear
            </a>
            <a href="#videos" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
              <Video className="h-4 w-4" />
              Videos
            </a>
            <a href="#stories" className="text-gray-600 hover:text-gray-900 transition-colors">Stories</a>
          </nav>
          <a href="#stories" className="inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            Share a Story
          </a>
        </div>
      </div>
    </header>
  );
}
