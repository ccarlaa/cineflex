import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from "../Loading/Loading";

import "./style.css";

function Footer(movie) {
    return (
        <footer className="chosen-movie">
            <img src={movie.poster} alt="" />
            <h2>{movie.title}</h2>
        </footer>
    )
}



function HtmlMovieSection(movie) {

    let showtimes = movie.showtimes;

    return (
        <>
            <p className="day">{movie.day} - {movie.date}</p>
            <div className="schedules">
                {showtimes.map( time => 
                    {
                        return (
                        <Link to={`/ThirdPage/${time.id}`} >
                            <div className="time">
                                <a>{time.name}</a>
                            </div>
                        </Link>
                        )
                    }
                )}
            </div>
        </>
    )
}

function HtmlSecondPage() {

    const [movie, setMovie] = useState(false);

    const {idMovie} = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        promisse.then((answer) => {
            setMovie(answer.data)
        });
        promisse.catch((warning) => console.log("ERRO",warning.response));
    }, []);

    let days = movie.days;

    if(movie !== false){
        return(
            <>
                <section className="choose-session">
                    <h2>Selecione o horário</h2>
                    <article className="movie-sessions">
                        {days.map(session => <HtmlMovieSection day={session.weekday} date={session.date} showtimes={session.showtimes}/>)}
                    </article>
                </section>
                <Footer poster={movie.posterURL} title={movie.title}/>
            </>
        )
    }else{
        return (
            <Loading />
        )
    }
}

export default function SecondPage() {
    return (
        <>
            <HtmlSecondPage /> 
        </>
    )
}