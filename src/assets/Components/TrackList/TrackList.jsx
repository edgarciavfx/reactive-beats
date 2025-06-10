import Track from "../Track/Track";

function TrackList({ tracksArray, handleClick }) {
  return (
    <>
      {tracksArray.map((track) => (
        <Track key={track.id} {...track} handleClick={handleClick}/>
      ))}
    </>
  );
}

export default TrackList;
