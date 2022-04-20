import { useState } from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
    // const [isAuthorize, setIsAuthorize] = useState(false);
    // const [authToken, setAuthToken] = useState("");
    const { token } = useSelector((state) => state.userToken);
    const dispatch = useDispatch();

    const getReturnSpotifyAuth = (hash) => {
        const stringAfterHash = hash.substring(1);
        const urlParams = stringAfterHash.split("&");
        const paramSplitUp = urlParams.reduce((accumulater, currentValue) => {
            const [key, value] = currentValue.split("=");
            accumulater[key] = value;
            return accumulater;
        }, {});
        // setAuthToken(paramSplitUp.access_token);
        dispatch(saveToken(paramSplitUp.access_token));
        // setIsAuthorize(true);
    };

    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    };

    useEffect(() => {
        if (window.location.hash) {
            getReturnSpotifyAuth(window.location.hash);
        }
    }, []);

    return (
        <div className='App'>
            {
                token !== "" ? <Redirect to="/create-playlist"/> : <p>You need to login</p> 
            }
            <h1>Login to your Spotify Account</h1>
            <button onClick={handleLogin}>Login to Spotify</button>
        </div>
    );
}
export default PlaylistForm;