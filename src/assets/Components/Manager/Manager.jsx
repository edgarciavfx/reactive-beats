import { useState } from "react";
import TrackList from "../TrackList/TrackList";
import { mockTracks } from "../../mockTracks";

function Manager() {
  const [query, setQuery] = useState(""); // for searchbar
  const [playlistName, setPlaylistName] = useState(""); // for playlistbar
  const [search, setSearch] = useState(""); // for search button
  const [playlist, setPlaylist] = useState([]); // playlist tracks array

  const resultsArray = mockTracks
    .filter((track) => {
      const nameLowered = track.name.toLowerCase();
      const searchLowered = search.toLowerCase();
      return search && nameLowered.includes(searchLowered);
    })
    .filter(({ id }) => !playlist.some((t) => t.id === id));

  const handleTrackClick = (newTrack) => {
    setPlaylist((prevPlaylist) => {
      // Check if newTrack is already in the playlist (by id)
      const exists = prevPlaylist.some((track) => track.id === newTrack.id);
      if (exists) {
        // Remove it
        return prevPlaylist.filter((track) => track.id !== newTrack.id);
      } else {
        // Add it
        return [...prevPlaylist, newTrack];
      }
    });
  };

  const handleSearchChange = ({ target }) => setQuery(target.value);

  const handleRename = ({ target }) => setPlaylistName(target.value);

  const handleSearchClick = () => setSearch(query);

  const handleSaveClick = () => {
    const uris = playlist.map(track => track.uri);
    console.log(uris);
  };

  return (
    <>
      <div className="manager-container">
        <div className="top-container">
          <div className="searchbar">
            <input type="text" value={query} onChange={handleSearchChange} />
          </div>
          <div className="buttons">
            <button onClick={handleSearchClick}>Search</button>
            <button onClick={handleSaveClick}>Save to Spotify</button>
          </div>
        </div>
        <div className="bottom-container">
          <div className="left-container">
            <h2>Search Results</h2>
            <TrackList
              tracksArray={resultsArray}
              handleClick={handleTrackClick}
            />
          </div>
          <div className="right-container">
            <input type="text" value={playlistName} onChange={handleRename} />
            <TrackList tracksArray={playlist} handleClick={handleTrackClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Manager;
