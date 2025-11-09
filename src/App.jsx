import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Techniques from './components/Techniques';
import Beginners from './components/Beginners';
import Stories from './components/Stories';

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Crux Collective. Climb smart, have fun.</p>
          <div className="flex items-center gap-4">
            <a href="#techniques" className="hover:text-gray-900">Techniques</a>
            <a href="#beginners" className="hover:text-gray-900">Beginners</a>
            <a href="#stories" className="hover:text-gray-900">Stories</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Techniques />
        <Beginners />
        <Stories />
      </main>
      <Footer />
    </div>
  );
}
