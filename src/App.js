import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //destruct구조로 원하는 데이터만 들고옴
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
    //componentDidMount는 컴포넌트가 첫 렌더링 됐을 때 생성자 호출, 프로펄티 가져오고, 렌더 한 다음 componentDiDMount 실행
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
            ))}
          </div>
        )}
      </section>
      //<section> 태그랑 <div> 통해서 html 구조 만들어줌.
    );
  }
}

export default App;
