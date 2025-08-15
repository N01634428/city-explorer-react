export default function VideoList({ videos }) {
  if (!videos.length) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Top YouTube Videos</h2>
      <ul>
        {videos.map((v) => (
          <li key={v.id.videoId} className="mb-3">
            <a
              href={`https://www.youtube.com/watch?v=${v.id.videoId}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              {v.snippet.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
