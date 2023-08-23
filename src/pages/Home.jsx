import { useState, useEffect } from "react";
import MovieCard from "../components/MoviesCard";

import "./MoviesGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;


function Home() {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results)
    };

    useEffect(() => {
        const topRatedurl = `${moviesURL}top_rated?${apiKEY}`

        getTopRatedMovies(topRatedurl)
    }, [])

    return (
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )

}

export default Home;