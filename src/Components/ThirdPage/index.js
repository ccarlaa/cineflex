import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.css";

import Loading from "../Loading/Loading";
import Footer from "../Footer"

function Subtitles(props) {
    return (
        <div className={props.class}>
            <div className="circle"></div>
            <h3>{props.description}</h3>
        </div>
    )
}

let array = [];

function HtmlSeats(seat) {
    const [selected, setSelected] = useState({number: seat.number, isAvailable: false, id: seat.id})
    console.log(array)
    if(seat.class === true){
        return (
        <div className="seat true" >{seat.number}</div>
        )
    }else if(seat.number === selected.number){
        if(selected.isAvailable === false){
            return (
                <div onClick={() => {
                        setSelected({number: seat.number, isAvailable: true, id: seat.id});
                        if(array.includes(seat.id)){
                            array = array.filter((elem) => elem!==seat.id);
                        }else{
                            array.push(seat.id);
                        }
                    }
                } className="seat grey" >{seat.number}</div>
            )
        }else{
            return (
                <div onClick={() => {
                        setSelected({number: seat.number, isAvailable: false, id: seat.id});
                        if(array.includes(seat.id)){
                            array = array.filter((elem) => elem!==seat.id);
                        }else{
                            array.push(seat.id);
                        }
                    }
                } className="seat blue" >{seat.number}</div>
            )
        }
    }
}

function HtmlThirdPage() {

    const [movie, setMovie] = useState(false);
    const [names, setNames] = useState("");
    const [cpf, setCpf] = useState("");

    const {idSeats} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`);
        promisse.then((answer) => {
            setMovie(answer.data);
        });
        promisse.catch((warning) => console.log("ERRO",warning.response));
    }, []);

    let seatsInfos = movie.seats;
    
    function fourthPage(event, array) {
        event.preventDefault();
        if(names !== "" && cpf.length === 11) {
            console.log("entrou")
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
                ids: [1,2,3],
                name: names,
                cpf: cpf
            });
            promise.then(() => {console.log("yep"); navigate("/FourthPage")});
            promise.catch(error => alert("Confira se você preencheu seu nome e seu cpf corretamente"));
        }
    }

    if(movie !== false){
        return(
            <>
                <section className="choose-seats">
                    <h2>Selecione o(s) assento(s)</h2>
                    <div className="seats">
                        {seatsInfos.map(number => <HtmlSeats number={number.name} class={number.isAvailable} id={number.id}/>)}
                        <div className="subtitle">
                            <Subtitles class="selected" description="Selecionado"/>
                            <Subtitles class="free" description="Disponível"/>
                            <Subtitles class="unavailable" description="Indisponível"/>
                        </div>
                        <div className="input"> 
                            <form className="form" onSubmit={fourthPage}>
                                <h4>Nome do comprador:</h4>      
                                <input
                                    type="text"
                                    value={names}
                                    placeholder="Digite seu nome..."
                                    onChange={(e) => {setNames(e.target.value) ; console.log("preenchendo name")}}
                                />
                                <h4>CPF do comprador:</h4>      
                                <input
                                    type="text"
                                    value={cpf}
                                    placeholder="Digite seu CPF..."
                                    onChange={(e) => {setCpf(e.target.value); console.log("preenchendo cpf")}}
                                />
                                <button type="submit" className="submit">Reservar assento(s)</button>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer poster={movie.movie.posterURL} title={movie.movie.title} time={` - ${movie.name}`}/>
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



 