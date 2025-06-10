import { useState } from "react";
import TrackList from "../TrackList/TrackList";
import InputBar from "../InputBar/InputBar";
import { mockTracks } from "../../mockTracks";

function Manager() {
  const [search, setSearch] = useState(""); // for search bar
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
      <div className="main-container">
        <div className="searchBar-container">
          <InputBar
            btnName={"Search"}
            setInput={setSearch}
            placeholder={"Search..."}
          />
        </div>
        <br />
        <div className="two-column">
          <div className="lft-column">
            <span>"Search Results"</span>
            <br />{" "}
            <TrackList tracksArray={resultsArray} handleClick={handleClick} />
          </div>
          <br />
          <div className="rgt-column">
            <div className="playlistBar-container">
              <InputBar
                btnName={"Save"}
                setInput={setPlaylistName}
                placeholder={playlistName || "Playlist name..."}
              />
            </div>
            <div className="playlist-container">
              <TrackList tracksArray={playlist} handleClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manager;
