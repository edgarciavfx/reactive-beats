import { useState } from "react";
import SearchBar from "../InputBar/InputBar";
import SearchResults from "../SearchResults/SearchResults";

function SearchContainer() {
  const [search, setSearch] = useState(""); // tracks for input search
  const [playlist, setPlaylist] = useState([]);

  const handleAddToPlaylist = (track) => {
    if (!playlist.some((song) => song.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
  };

  return (
    <>
      <div className="app-container">
        <SearchBar setSearch={setSearch} />
        <div className="two-col-container">
          {/* SearchResults */}
          <SearchResults
            search={search}
            onAddTrack={handleAddToPlaylist}
            playlist={playlist}
          />
          {/* Playlist component will go here */}
        </div>
      </div>
    </>
  );
}

export default SearchContainer;
