import { socialIcons } from './socialIcons';

export default function SocialLinks({ social }) {
  if (!social) return null;

  const platforms = Object.entries(social).filter(([, url]) => url);

  if (platforms.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {platforms.map(([platform, url]) => {
        const icon = socialIcons[platform];
        if (!icon) return null;
        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
            className="flex items-center justify-center min-h-[44px] min-w-[44px] text-medium-grey hover:text-orange transition-colors"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}
