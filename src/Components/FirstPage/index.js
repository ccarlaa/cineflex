import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from "../Loading/Loading";

import "./style.css";

function HtmlMovie(movie) {
    return (
        <Link to = {`/SecondPage/${movie.id}`}>
            <img src={movie.art} alt="" />
        </Link>
    )
}

function HtmlFirstPage() {

    const [movies, setMovies] = useState(false);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then((answer) => {
            setMovies(answer.data)
        });
        promisse.catch((warning) => console.log(warning.response));
    }, []);
    
    if(movies !== false){
        return ( 
            <section className="choose-movie">
                <h2>Selecione o filme</h2>
                <figure className="movies">
                    {movies.map((movie) => <HtmlMovie art={movie.posterURL} id={movie.id}/>)}
                </figure>
            </section>
        )
    }else{
        console.log("loading")
        return (
            <Loading />
        )
    }
}

export default function FirstPage() {
    return (
        <>
            <HtmlFirstPage />
        </>
    )
}