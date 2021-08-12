import { Container, Content, Wrap } from "../styles/Trending";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";

const Trending = (props) => {
  const movies = useSelector(selectTrending);

  return (
    <Container>
      <h4>TRENDING</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};



export default Trending;
