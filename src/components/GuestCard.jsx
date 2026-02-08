import { Link } from 'react-router-dom';

export default function GuestCard({ guest }) {
  const { name, slug, photo, title } = guest;

  return (
    <Link
      to={`/guests/${slug}`}
      className="group block text-center p-6 rounded-lg hover:scale-[1.03] hover:shadow-lg transition-all duration-200"
    >
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/images/guests/placeholder.svg';
          }}
        />
      </div>
      <h3 className="font-semibold text-black group-hover:text-orange transition-colors">
        {name}
      </h3>
      {title && (
        <p className="mt-1 text-sm text-medium-grey">{title}</p>
      )}
    </Link>
  );
}
