import { Container, Content, Wrap } from "../styles/Originals";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movie/movieSlice";

const Originals = (props) => {
  const movies = useSelector(selectOriginal);

  return (
    <Container>
      <h4>ORIGINALS</h4>
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



export default Originals;
