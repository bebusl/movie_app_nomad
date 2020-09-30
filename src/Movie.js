import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ id, year, title, summary, poster }) {
  return(
      <div className="movie">
          <img src={poster} alt={title} title={title} />
          <div className="movie__data">
              <h3 className="movie__title">{title}</h3>
              <h5 className="movie__year">{year}</h5>
              <p className="movie__summary">{summary}</p>
          </div>
      </div>
  )
}
//원래 props로 뭉쳐가지고 인자받는데, destruct구조 쓰면 prop내의 원하는 데이터 정확하게 가져올 수 있음

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
