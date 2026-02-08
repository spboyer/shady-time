import episodes from '../data/episodes.json';
import EpisodeCard from '../components/EpisodeCard';

const sortedEpisodes = [...episodes].sort(
  (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
);

export default function Episodes() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-8">Episodes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedEpisodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
