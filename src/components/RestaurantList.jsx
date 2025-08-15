export default function RestaurantList({ restaurants }) {
  if (!restaurants.length) return null;

  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold mb-2">Top Restaurants</h2>
      <ul>
        {restaurants.map((r) => (
          <li key={r.id} className="mb-3">
            <strong>{r.name}</strong> <br />
            {r.location.address1}, {r.location.city} <br />
            Rating: {r.rating} ⭐
          </li>
        ))}
      </ul>
    </div>
  );
}
