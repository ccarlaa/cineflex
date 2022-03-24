
import "./style.css";

function Footer() {
    return (
        <footer className="chosen-movie">
            <img src="https://nerdsefilmes.com/wp-content/uploads/2022/03/Turning-Red-da-Pixar-chegou-hoje-ao-Disney-Plus.png" alt="" />
            <h2>Turning Red</h2>
        </footer>
    )
}


function HtmlMovieSection(movie) {
    return (
        <>
            <p className="day">{movie.day}</p>
            <div className="schedules">
                <div className="time">{movie.schedules}</div>
                <div className="time">{movie.schedules}</div>
            </div>
            <p className="day">{movie.day}</p>
            <div className="schedules">
                <div className="time">{movie.schedules}</div>
                <div className="time">{movie.schedules}</div>
            </div>
        </>
    )
}

function HtmlSecondPage() {
    return(
        <>
            <section className="choose-session">
                <h2>Selecione o horário</h2>
                <article className="movie-sessions">
                    <HtmlMovieSection day="Quinta-feira - 24/06/2021" schedules="13:00"/>  {/* MAP COM OS DIAS E HORÁRIOS*/}
                </article>
            </section>
            <Footer />
        </>
    )
}

export default function SecondPage() {
    return (
        <>
            <HtmlSecondPage /> 
        </>
    )
}