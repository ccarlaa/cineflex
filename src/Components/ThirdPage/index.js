import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.css";

import Loading from "../Loading/Loading";


function Input(props) {
    return (
        <div className="input">    
            <h4>{props.title}</h4>      
            <input
                className={props.class}
                type="text"
                placeholder={props.placeholder}
            />
        </div>
    )
}

function Subtitles(props) {
    return (
        <div className={props.class}>
            <div className="circle"></div>
            <h3>{props.description}</h3>
        </div>
    )
}

let array = []

function HtmlSeats(seat) {
    const [selected, setSelected] = useState({number: seat.number, isAvailable: false, id: seat.id})
    if(seat.class === true){
        return (
        <div className="seat true" >{seat.number}</div>
        )
    }else if(seat.number == selected.number){
        if(selected.isAvailable === false){
            return (
                <div onClick={() => {
                    setSelected({number: seat.number, isAvailable: true, id: seat.id});
                    if(array.includes(seat.id)){
                        array = array.filter((elem) => elem!==seat.id)

                    }else{
                        array.push(seat.id)
                    }
                }
                } className="seat grey" >{seat.number}</div>
            )
        }else{
            return (
                <div onClick={() => {
                    setSelected({number: seat.number, isAvailable: false, id: seat.id});
                    if(array.includes(seat.id)){
                        array = array.filter((elem) => elem!==seat.id)

                    }else{
                        array.push(seat.id)
                    }
                }
            } className="seat blue" >{seat.number}</div>
            )
        }
    }
}

function HtmlThirdPage() {

    const [movie, setMovie] = useState(false);

    const {idSeats} = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`);
        promisse.then((answer) => {
            setMovie(answer.data)
        });
        promisse.catch((warning) => console.log("ERRO",warning.response));
    }, []);

    let seatsInfos = movie.seats;

    if(movie !== false){
        return(
            <>
                <section className="choose-seats">
                    <h2>Selecione o(s) assento(s)</h2>
                    <div className="seats">
                        {seatsInfos.map(number => <HtmlSeats number={number.name} class={number.isAvailable} id={number.id}/>)}
                    </div>
                    <div className="subtitle">
                        <Subtitles class="selected" description="Selecionado"/>
                        <Subtitles class="free" description="Disponível"/>
                        <Subtitles class="unavailable" description="Indisponível"/>
                    </div>
                    <Input title="Nome do comprador:" class="name" placeholder="Digite seu nome..." />
                    <Input title="CPF do comprador:" class="cpf" placeholder="Digite seu CPF..." />
                </section>
                <footer className="footer">
                    <button type="button" class="next-page">Reservar assento(s)</button>
                </footer>
            </>
        )
    }else{
        return (
            <Loading />
        )
    }
}

export default function ThirdPage() {
    return(
        <>
            <HtmlThirdPage />
        </>
    )
}