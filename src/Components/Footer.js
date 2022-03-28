export default function Footer(movie) {
    return (
        <footer className="chosen-movie">
            <img src={movie.poster} alt="" />
            <h2>{movie.title}{movie.time}</h2>
        </footer>
    )
}