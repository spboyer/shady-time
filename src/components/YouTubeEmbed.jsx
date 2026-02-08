export default function YouTubeEmbed({ url, title = 'YouTube video player' }) {
  if (!url) {
    return (
      <div className="aspect-video rounded-lg overflow-hidden bg-grey flex items-center justify-center">
        <p className="text-medium-grey">Video unavailable</p>
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-lg overflow-hidden">
      <iframe
        src={url}
        title={title}
        className="w-full h-full"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
