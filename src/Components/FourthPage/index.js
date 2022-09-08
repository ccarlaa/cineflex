import { useNavigate } from "react-router-dom";
import "./style.css";

export default function FourthPage(props) {
    const { seatsNumbers, title, day, time, name, cpf } = props;
    
    const navigate = useNavigate();

    return (
        <>
            <section class="finish">
                <h2>Pedido feito com sucesso!</h2>
                <div class="session">
                    <h3>Filme e sessão</h3>
                    <p>{title}</p>
                    <p>{day}{time}</p>
                </div>
                <div class="session">
                    <h3>Ingressos</h3>
                    {
                        seatsNumbers.map((number) => {
                            return (
                                <p>Assento {number}</p>
                            )
                        })
                    }
                </div>
                <div class="session">
                    <h3>Comprador</h3>
                    <p>{name}</p>
                    <p>{cpf}</p>
                </div>
            </section>
            <footer class="footer">
                <button onClick={() => navigate("/")} type="button" class="back-home">Voltar pra Home</button>
            </footer>
        </>
    )
}

