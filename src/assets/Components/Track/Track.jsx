function Track({ id, name, artist, album, handleClick }) {
  const trackData = { id, name, artist, album };

  return (
    <div onClick={() => handleClick(trackData)}>
      <p>{`Song #${id} ${name}, ${artist} - ${album}`}</p>
    </div>
  );
}

export default Track;

//   { id: 9, name: "Psychosocial", artist: "Slipknot", album: "All Hope Is Gone" },
//   { id: 10, name: "One", artist: "Metallica", album: "...And Justice for All" },
//   { id: 11, name: "Enter Sandman", artist: "Metallica", album: "Metallica" },
//   { id: 12, name: "Nothing Else Matters", artist: "Metallica", album: "Metallica" },
