import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RestaurantList from "./components/RestaurantList";
import VideoList from "./components/VideoList";
import { fetchData } from "./api";

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    const data = await fetchData(city);
    setRestaurants(data.restaurants.slice(0, 5));
    setVideos(data.videos.slice(0, 5));
    setLoading(false);
  };

  return (
    <div className="p-5 font-sans">
      <h1 className="text-3xl font-bold mb-2">City Explorer</h1>
      <p className="mb-5">Discover the best restaurants and food videos in any city!</p>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      <RestaurantList restaurants={restaurants} />
      <VideoList videos={videos} />
    </div>
  );
}
