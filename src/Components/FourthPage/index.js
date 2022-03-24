
import "./style.css";

function HtmlFourthPage() {
    return (
        <>
            <section class="finish">
                <h2>Pedido feito com sucesso!</h2>
                <div class="session">
                    <h3>Filme e sessão</h3>
                    <p>Turning Red</p>
                    <p>day time</p>
                </div>
                <div class="session">
                    <h3>Ingressos</h3>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </div>
                <div class="session">
                    <h3>Comprador</h3>
                    <p>Nome: Carla de Araujo</p>
                    <p>CPF: O64.048.671-17</p>
                </div>
            </section>
            <footer class="footer">
                <button type="button" class="back-home">Voltar pra Home</button>
            </footer>
        </>
    )
}

export default function FourthPage() {
    return (
        <>
            <HtmlFourthPage />
        </>
    )
}