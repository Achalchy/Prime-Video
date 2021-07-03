import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Row from "./components/Row";
import Footer from "./components/Footer";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Button } from "@material-ui/core";
function App() {
  const [datas, setDatas] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState("");
  const [commands, setCommands] = useState("now_playing");
  const api = "75890b575cb0e33ac93c4a88cebe5017";
  const imgUrl = `https://image.tmdb.org/t/p/w500/`;
  const baseUrl = `https://api.themoviedb.org/3/movie/${commands}?api_key=${api}&language=en-US&page=${pageNumber}`;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${query}&language=en-US&page=${pageNumber}`;
  const getMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setDatas(data.results);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    query !== "" ? getMovies(searchUrl) : console.log("nothing");
    setQuery("");
  };
  const queryHandler = (e) => {
    setQuery(e.target.value);
  };
  const commandHandler = (e) => {
    setCommands("trending");
    setCommands("popular");
  };
  useEffect(() => {
    getMovies(baseUrl);
  }, [pageNumber,commands]);
  return (
    <div className="app">
      {/* header */}
      <Header
        searchHandler={searchHandler}
        setquery={queryHandler}
        query={query}
        trending={commandHandler}
        popular={commandHandler}
      />
      {/* Rows */}
      <div className="Maincontainer">
        {datas.map((data) => {
          return (
            <Row
              title={data.title}
              description={data.overview}
              poster={imgUrl + data.poster_path}
              votes={data.vote_count}
              rating={data.vote_average}
              date={data.release_date}
            />
          );
        })}
        <div className="pagesButton">
          <Button
            variant="contained"
            color="default"
            className="prevPage"
            startIcon={<KeyboardArrowLeftIcon />}
            onClick={() => {
              if (pageNumber > 1) setPageNumber(pageNumber - 1);
            }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="default"
            className="nextPage"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => {
              if (pageNumber <= 19) setPageNumber(pageNumber + 1);
              
            }}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
