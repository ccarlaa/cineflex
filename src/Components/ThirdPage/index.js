import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.css";

import Loading from "../Loading/Loading";
import Footer from "../Footer"
import FourthPage from "../FourthPage"

function Subtitles(props) {
    return (
        <div className={props.class}>
            <div className="circle"></div>
            <h3>{props.description}</h3>
        </div>
    )
}

function HtmlSeats(seat) {
    let {number, orange, id, setArray, array, SetNumberSeat, NumberSeat} = seat
    const [selected, setSelected] = useState({number: number, isAvailable: false, id: id})
    if(orange === true){
        return (
        <div className="seat true" >{number}</div>
        )
    }else if(number === selected.number){
        if(selected.isAvailable === false){
            return (
                <div onClick={() => {
                        setSelected({number: number, isAvailable: true, id: id});
                        if(array.includes(id)){
                            setArray(array.filter((elem) => elem!==id));
                            SetNumberSeat(NumberSeat.filter((num) => num!==number));
                        }else{
                            setArray([...array, id]);
                            SetNumberSeat([...NumberSeat, number]);
                        }
                    }
                } 
                className="seat grey" >{number}</div>
            )
        }else{
            return (
                <div onClick={() => {
                        setSelected({number: number, isAvailable: false, id: id});
                        if(array.includes(id)){
                            setArray(array.filter((elem) => elem!==id));
                            SetNumberSeat(NumberSeat.filter((num) => num!==number));
                        }else{
                            setArray([...array, id]);
                            SetNumberSeat([...NumberSeat, number]);
                        }
                    }
                } className="seat blue" >{number}
                </div>
            )
        }
    }
}

function HtmlThirdPage() {

    const [movie, setMovie] = useState(false);
    const [names, setNames] = useState("");
    const [cpf, setCpf] = useState("");
    const [array, setArray] = useState([]);
    const [display, setDisplay] = useState(false);
    const [numberSeat, setNumberSeat] = useState([]);

    const {idSeats} = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`);
        promisse.then((answer) => {
            setMovie(answer.data);
        });
        promisse.catch((warning) => console.log("ERRO",warning.response));
    }, []);

    let seatsInfos = movie.seats;
    
    function fourthPage(event) {
        event.preventDefault();
        if(names !== "" && cpf.length === 11 && array.length !== 0) {
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
                ids: array,
                name: names,
                cpf: cpf
            });
            promise.then(() => {
                setDisplay(true);
        });
            promise.catch(error => alert("Confira se você preencheu seu nome e seu cpf corretamente"));
        }else{
            alert("Preencha os campos de nome, cpf e assentos corretamente")
        }
    }
    
    if(display === false){
        if(movie !== false){
            return(
                <>
                    <section className="choose-seats">
                        <h2>Selecione o(s) assento(s)</h2>
                        <div className="seats">
                            {seatsInfos.map(number => <HtmlSeats
                            number={number.name} 
                            orange={number.isAvailable} 
                            id={number.id} 
                            setArray={setArray} 
                            array={array} 
                            setNumberSeat={setNumberSeat} 
                            NumberSeat={numberSeat}
                            SetNumberSeat = {setNumberSeat}                            
                        />)}
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
                                        onChange={(e) => {setNames(e.target.value)}}
                                    />
                                    <h4>CPF do comprador:</h4>      
                                    <input
                                        type="text"
                                        value={cpf}
                                        placeholder="Digite seu CPF..."
                                        onChange={(e) => {setCpf(e.target.value)}}
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
    }else{
        return (
            <FourthPage 
                title={movie.movie.title} 
                time={` - ${movie.name}`} 
                day={movie.day.weekday} 
                name={names}
                cpf={cpf}
                seatsNumbers={numberSeat}
            />
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



 