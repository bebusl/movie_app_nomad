import React from 'react';
import axios from "axios";


class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //영화 목록 긁어오기
  };

  componentDidMount() { 
    this.getMovies();
    //componentDidMount는 컴포넌트가 첫 렌더링 됐을 때 생성자 호출, 프로펄티 가져오고, 렌더 한 다음 componentDiDMount 실행
  }
  

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading...":"We are Ready"}</div>
  }


  
}