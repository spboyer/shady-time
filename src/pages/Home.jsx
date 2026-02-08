import { Link } from 'react-router-dom';
import episodes from '../data/episodes.json';
import EpisodeCard from '../components/EpisodeCard';

const latestEpisode = [...episodes].sort(
  (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
)[0];

const quickNav = [
  { to: '/episodes', label: 'Episodes', desc: 'Browse all episodes and find your next listen.' },
  { to: '/guests', label: 'Guests', desc: 'Meet the people behind the conversations.' },
  { to: '/contact', label: 'Contact', desc: 'Get in touch — we love hearing from listeners.' },
];

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-20">
      {/* Hero */}
      <section className="text-center py-12 sm:py-24">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight">
          Shady Time
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-medium-grey max-w-xl mx-auto">
          Stories worth your time
        </p>
        <Link
          to={`/episodes/${latestEpisode.slug}`}
          className="inline-block mt-8 px-8 py-3 bg-orange text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Listen Now
        </Link>
      </section>

      {/* Featured episode */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">Latest Episode</h2>
        <div className="max-w-md">
          <EpisodeCard episode={latestEpisode} />
        </div>
      </section>

      {/* About */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">About the Podcast</h2>
        <p className="text-medium-grey max-w-2xl leading-relaxed">
          Shady Time is a podcast about the people and ideas shaping technology.
          Each episode is a conversation with builders, designers, and thinkers
          who care about craft. No hype — just honest stories worth your time.
        </p>
      </section>

      {/* Quick nav */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {quickNav.map(({ to, label, desc }) => (
            <Link
              key={to}
              to={to}
              className="block p-6 border border-soft-grey rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-black">{label}</h3>
              <p className="mt-2 text-sm text-medium-grey">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
