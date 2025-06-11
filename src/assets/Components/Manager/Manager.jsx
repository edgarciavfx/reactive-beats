import { useState } from "react";
import TrackList from "../TrackList/TrackList";
import InputBar from "../InputBar/InputBar";
import { mockTracks } from "../../mockTracks";
import ButtonAPI from "../ButtonAPI/ButtonAPI";

function Manager() {
  const [search, setSearch] = useState(""); // for search button
  const [searchbar, setSearchbar] = useState(""); // for search bar
  const [playlist, setPlaylist] = useState([]); // playlist tracks array
  const [playlistName, setPlaylistName] = useState(""); // for playlist bar

  const resultsArray = mockTracks
    .filter((track) => {
      const nameLowered = track.name.toLowerCase();
      const searchLowered = search.toLowerCase();
      return search && nameLowered.includes(searchLowered);
    })
    .filter(({ id }) => !playlist.some((t) => t.id === id));

  const handleClick = (newTrack) => {
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

  return (
    <>
      <div className="manager-container">
        <div className="top-container">
          <div className="searchbar">
            <InputBar
              setInput={setSearchbar}
              clear={false}
              placeholder={"Search..."}
            />
          </div>
          <div className="buttons">
            <ButtonAPI
              name={"Search"}
              handleClick={() => setSearch(searchbar)}
            />
            <ButtonAPI name={"Save to Spotify"} />
          </div>
        </div>
        <div className="bottom-container">
          <div className="left-container">
            <h2>Search Results</h2>
            <TrackList tracksArray={resultsArray} handleClick={handleClick} />
          </div>
          <div className="right-container">
            <InputBar
              setInput={setPlaylistName}
              clear={true}
              placeholder={playlistName || "Playlist name..."}
            />
            <TrackList tracksArray={playlist} handleClick={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Manager;
