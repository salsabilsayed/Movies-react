import { useState, useEffect } from "react";
import axios from "axios";

import Title from "../component/Title";
import Input from "../component/Input";
import MoviesList from "../component/MoviesList";

import './Home.css'

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [movieName, setMovieName] = useState("batman");

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=43dbf631&s=${movieName}`)
      .then((res) => {
        if (res.data.Error) {
          setError("Movie not found!");
          return;
        }
        const result = res.data.Search;
        setData(result);
        setError(null);
      })
      .catch((e) => {
        console.log(e);
        setError("Something went wrong!");
      });
  }, [movieName]);

  return (
    <section className="home">
      <Title />
      <Input setMovieName={setMovieName} movieName={movieName} error={error} setError={setError} />
      {!error && <MoviesList data={data} />}
    </section>
  );
};

export default Home;
