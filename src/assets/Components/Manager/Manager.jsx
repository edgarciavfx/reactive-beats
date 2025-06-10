import { useState } from "react";
import TrackList from "../TrackList/TrackList";
import InputBar from "../InputBar/InputBar";

function Manager() {
  const [search, setSearch] = useState("a song"); // for search bar
  const [playlist, setPlaylist] = useState(["songA", "songB", "songC"]); // playlist tracks array
  const [playlistName, setPlaylistName] = useState("cool playlist name"); // for playlist bar

  const resultsArray = ["We", "Are", "Results", "Array"];

  const handleClick = ({ target }) => {
    console.log(target);
    setPlaylist(["songX", "songY", "songZ"]);
  };

  return (
    <>
      <div className="main-container">
        <div className="searchBar-container">
          <InputBar input={search} setInput={setSearch} />
        </div>
        <br />
        <div className="two-column">
          <div className="lft-column">
            <span>"Search Results"</span>
            <br />
            <TrackList tracksArray={resultsArray} handleClick={handleClick} />
          </div>
          <br />
          <div className="rgt-column">
            <div className="playlistBar-container">
              <InputBar input={playlistName} setInput={setPlaylistName} />
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
