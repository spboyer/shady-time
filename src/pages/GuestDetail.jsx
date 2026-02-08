import { useParams, Link } from 'react-router-dom';
import guests from '../data/guests.json';
import episodes from '../data/episodes.json';
import SocialLinks from '../components/SocialLinks';

export default function GuestDetail() {
  const { slug } = useParams();
  const guest = guests.find((g) => g.slug === slug);

  if (!guest) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-black">Guest Not Found</h1>
        <p className="mt-4 text-medium-grey">
          We couldn't find that guest.
        </p>
        <Link to="/guests" className="inline-block mt-6 text-orange hover:underline">
          ← Back to Guests
        </Link>
      </div>
    );
  }

  const guestEpisodes = episodes.filter((ep) =>
    ep.guestIds.includes(guest.id)
  );

  return (
    <div>
      <Link to="/guests" className="text-orange hover:underline text-sm">
        ← Back to Guests
      </Link>

      <div className="mt-6 space-y-8">
        <header className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden shrink-0">
            <img
              src={guest.photo}
              alt={guest.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/images/guests/placeholder.svg';
              }}
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-black">{guest.name}</h1>
            {guest.title && (
              <p className="mt-1 text-lg text-medium-grey">{guest.title}</p>
            )}
            {guest.social && (
              <div className="mt-3">
                <SocialLinks social={guest.social} />
              </div>
            )}
          </div>
        </header>

        {guest.bio && (
          <section>
            <h2 className="text-xl font-bold text-black mb-3">About</h2>
            <p className="text-medium-grey leading-relaxed">{guest.bio}</p>
          </section>
        )}

        {guestEpisodes.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-black mb-3">
              Episodes featuring {guest.name}
            </h2>
            <ul className="space-y-2">
              {guestEpisodes.map((ep) => (
                <li key={ep.id}>
                  <Link
                    to={`/episodes/${ep.slug}`}
                    className="text-orange hover:underline font-medium"
                  >
                    Ep {ep.episodeNumber}: {ep.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
