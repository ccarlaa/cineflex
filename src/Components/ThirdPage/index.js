
import "./style.css";


let numbers = [];
let number = 1;

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

function HtmlSeats(seat) {
    return (
        <div className="seat">{seat.number}</div>
    )
}

function HtmlThirdPage() {
    while(number <= 50){
        numbers = [...numbers, number];
        number++;
    }
    console.log(numbers)
    return(
        <>
            <section className="choose-seats">
                <h2>Selecione o(s) assento(s)</h2>
                <div className="seats">
                    {numbers.map(number => <HtmlSeats number={number} />)}
                </div>
                <div className="subtitle">
                    <Subtitles class="selected" description="Selecionado"/>
                    <Subtitles class="free" description="Disponível"/>
                    <Subtitles class="unavailable" description="Indisponível"/>
                </div>
                <Input title="Nome do comprador:" class="name" placeholder="Digite seu nome..." />
                <Input title="CPF do comprador:" class="cpf" placeholder="Digite seu CPF..." />
            </section>
            <footer class="footer">
                <button type="button" class="next-page">Reservar assento(s)</button>
            </footer>
        </>
    )
}

export default function ThirdPage() {
    return(
        <>
            <HtmlThirdPage />
        </>
    )
}