import guests from '../data/guests.json';
import GuestCard from '../components/GuestCard';

export default function Guests() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black mb-8">Guests</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {guests.map((guest) => (
          <GuestCard key={guest.id} guest={guest} />
        ))}
      </div>
    </div>
  );
}
