import axios from 'axios';

const BASE_URL = "https://city-explorer-3.onrender.com/api";

export const fetchData = async (city) => {
  try {
    const res = await axios.post(`${BASE_URL}/search`, { city });
    return res.data; // { restaurants, videos }
  } catch (err) {
    console.error("Error fetching data:", err);
    return { restaurants: [], videos: [] };
  }
};
