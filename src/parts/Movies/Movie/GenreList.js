const GenreList = ({ genres }) => {
  return (
    <div className="MovieGenres">
      {genres.slice(0, 3).join(genres.length > 2 ? ', ': ' & ')}
    </div>
  )
};

export default GenreList;
