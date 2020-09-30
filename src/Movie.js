import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
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
