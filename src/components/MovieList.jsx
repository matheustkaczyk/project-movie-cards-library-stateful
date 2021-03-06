import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, selectedGenre, bookmarkedOnly } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
          .filter((filteredMovies) => !bookmarkedOnly || filteredMovies.bookmarked)// esta parte da filtragem feita com total ajuda dos meus colegas nuwanda e lucas nahas
          .filter(({ title, subtitle, storyline }) => title.includes(searchText)
          || subtitle.includes(searchText) || storyline.includes(searchText))
          .filter(({ genre }) => genre.includes(selectedGenre))
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  searchText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

export default MovieList;
