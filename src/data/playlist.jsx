function PlaylistForm() {    
    return (
        <>
        <form
            onSubmit={handleCreatePlaylist}
            className="form form-create-playlist"
        >
            <label htmlFor="title">Title</label>
            <input
            required
            id="title"
            type="text"
            name="title"
            value={playlistTitle}
            onInput={(event) => setPlaylistTitle(event.target.value)}
            />
            <label htmlFor="description">Description</label>
            <input
            required
            type="text"
            name="description"
            id="description"
            value={playlistDescription}
            onInput={(event) => setPlaylistDescription(event.target.value)}
            />
            {errorForm && <p className="text-error my-2">{errorForm}</p>}
            <input type="submit" value="Create Playlist" />
        </form>
        <span>Select song that you want to include</span>
        <SearchBar onSearchChange={handleSearch} />
        {!error && tracks.length > 0 && (
            <PlaylistContainer
            tracks={tracks}
            onSelectTrack={handleSelectTrack}
            selectedTracks={selectedTracks}
            />
        )}
        {!error && tracks.length === 0 && <p>No tracks found</p>}
        {error && <p>{error}</p>}
        </>
    );
}
export default PlaylistForm;