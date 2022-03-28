import { useNavigate } from "react-router-dom";

import "./style.css";

export default function FourthPage(props) {
    
    const navigate = useNavigate()
    return (
        <>
            <section class="finish">
                <h2>Pedido feito com sucesso!</h2>
                <div class="session">
                    <h3>Filme e sessão</h3>
                    <p>{props.title}</p>
                    <p>{props.day}{props.time}</p>
                </div>
                <div class="session">
                    <h3>Ingressos</h3>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </div>
                <div class="session">
                    <h3>Comprador</h3>
                    <p>{props.name}</p>
                    <p>{props.cpf}</p>
                </div>
            </section>
            <footer class="footer">
                <button onClick={() => navigate("/")} type="button" class="back-home">Voltar pra Home</button>
            </footer>
        </>
    )
}

