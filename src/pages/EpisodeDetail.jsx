import { useParams, Link } from 'react-router-dom';
import episodes from '../data/episodes.json';
import guests from '../data/guests.json';
import YouTubeEmbed from '../components/YouTubeEmbed';

export default function EpisodeDetail() {
  const { slug } = useParams();
  const episode = episodes.find((ep) => ep.slug === slug);

  if (!episode) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">Episode Not Found</h1>
        <p className="mt-4 text-medium-grey">
          We couldn't find that episode.
        </p>
        <Link to="/episodes" className="inline-block mt-6 text-orange hover:underline">
          ← Back to Episodes
        </Link>
      </div>
    );
  }

  const episodeGuests = episode.guestIds
    .map((id) => guests.find((g) => g.id === id))
    .filter(Boolean);

  return (
    <div>
      <Link to="/episodes" className="inline-flex items-center min-h-[44px] text-orange hover:underline text-sm">
        ← Back to Episodes
      </Link>

      <div className="mt-6 space-y-8">
        <header>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
            <span className="bg-orange text-white text-xs font-semibold px-2 py-1 rounded">
              Episode {episode.episodeNumber}
            </span>
            <time className="text-sm text-medium-grey" dateTime={episode.publishedDate}>
              {new Date(episode.publishedDate + 'T00:00:00').toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="text-sm text-medium-grey">· {episode.duration}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-black">{episode.title}</h1>
        </header>

        <YouTubeEmbed url={episode.youtubeUrl} title={episode.title} />

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Show Notes</h2>
          <p className="text-medium-grey leading-relaxed">{episode.showNotes}</p>
        </section>

        {episodeGuests.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-black mb-3">Guests</h2>
            <ul className="space-y-2">
              {episodeGuests.map((guest) => (
                <li key={guest.id}>
                  <Link
                    to={`/guests/${guest.slug}`}
                    className="text-orange hover:underline font-medium"
                  >
                    {guest.name}
                  </Link>
                  {guest.title && (
                    <span className="text-sm text-medium-grey"> — {guest.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
