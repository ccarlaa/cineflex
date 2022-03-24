
import "./style.css";

function HtmlMovie(movie) {
    return (
        <img src={movie.art} alt="" />
    )
}

function HtmlFirstPage() {
    return ( 
        <section className="choose-movie">
            <h2>Selecione o filme</h2>
            <figure className="movies">
                <HtmlMovie art="https://nerdsefilmes.com/wp-content/uploads/2022/03/Turning-Red-da-Pixar-chegou-hoje-ao-Disney-Plus.png" />  {/* MAP COM AS CAPAS DOS LIVROS*/}
                <HtmlMovie art="https://nerdsefilmes.com/wp-content/uploads/2022/03/Turning-Red-da-Pixar-chegou-hoje-ao-Disney-Plus.png" />
                <HtmlMovie art="https://nerdsefilmes.com/wp-content/uploads/2022/03/Turning-Red-da-Pixar-chegou-hoje-ao-Disney-Plus.png" />
                <HtmlMovie art="https://nerdsefilmes.com/wp-content/uploads/2022/03/Turning-Red-da-Pixar-chegou-hoje-ao-Disney-Plus.png" />
            </figure>
        </section>
     )
}

export default function FirstPage() {
    return (
        <>
            <HtmlFirstPage />
        </>
    )
}