//import Music from './components/music';
import Table from './components/Table';
//import list from './data/data.js';

function App() {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  const handleAuthSpotify = () => {
    authService.login();
  };

  const handleUnAuthSpotify = () => {
    authService.logout();
  };

  const geTracks = async (query) => {
    if (!query) return;
    try {
      const {
        data: {
          tracks: { items },
        },
      } = await trackService.search(query);

      setTracks(items);
      // eslint-disable-next-line no-shadow
    } catch (error) {
      let errorMessage = 'Something went wrong';
      if (error.response && error.response.status === 401) {
        errorMessage = 'Please login to Spotify';
      } else {
        errorMessage = error.response.data.error.message;
      }
      setError(errorMessage);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = event.target[0].value;
    await geTracks(query);
  };

  return (
    <div className="app">
      <h1 className="title">Create Playlist</h1>
      <PlaylistContainer />
      <div className="header d-flex justify-between">
        <h1>Spotify Playlist</h1>
        {!isAuth() && (
          <button
            onClick={handleAuthSpotify}
            className="btn btn-spotify"
            type="button"
          >
            Auth to Spotify
          </button>
        )}
        {isAuth() && (
          <button
            onClick={handleUnAuthSpotify}
            className="btn btn-danger"
            type="button"
          >
            Disconnect from Spotify
          </button>
        )}
      </div>
      <SearchBar onSearchChange={handleSearch} />
      {!error && tracks.length > 0 && <PlaylistContainer tracks={tracks} />}
      {!error && tracks.length === 0 && <p>No tracks found</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
