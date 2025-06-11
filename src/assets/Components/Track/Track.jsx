function Track({ id, name, artist, album, uri, handleClick }) {
  const trackData = { id, name, artist, album, uri };

  return (
    <div onClick={() => handleClick(trackData)}>
      <p>{`Song #${id} ${name}, ${artist} - ${album}`}</p>
    </div>
  );
}

export default Track;
