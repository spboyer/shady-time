import { Link } from 'react-router-dom';

export default function EpisodeCard({ episode }) {
  const { title, slug, thumbnail, publishedDate, description, episodeNumber } = episode;

  return (
    <Link
      to={`/episodes/${slug}`}
      className="group block border border-soft-grey rounded-lg overflow-hidden hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
    >
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover"
          onError={(e) => {
            e.target.src = '/images/episodes/placeholder.svg';
          }}
        />
        <span className="absolute top-3 left-3 bg-orange text-white text-xs font-semibold px-2 py-1 rounded">
          Ep {episodeNumber}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-black group-hover:text-orange transition-colors line-clamp-2">
          {title}
        </h3>
        <time className="block mt-1 text-sm text-medium-grey" dateTime={publishedDate}>
          {new Date(publishedDate + 'T00:00:00').toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <p className="mt-2 text-sm text-medium-grey line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
