// import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.css";

function HtmlMovie(movie) {
    return (
        <img src={movie.art} alt="" />
    )
}

function HtmlFirstPage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then((answer) => {
            setMovies(answer.data)
        });
        promisse.catch((warning) => console.log(warning.response));
    }, []);

    console.log(movies)

    return ( 
        <section className="choose-movie">
            <h2>Selecione o filme</h2>
            <figure className="movies">
                {movies.map((movie) => <HtmlMovie art={movie.posterURL} />)}
            </figure>
        </section>
     )
}

export default function FirstPage() {
    return (
        <>
            <HtmlFirstPage />
        </>
    )
}