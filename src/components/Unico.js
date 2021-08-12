import { Container, Content, Wrap } from "../styles/Unico"
import  { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import db from "../firebase"
import { setMovies } from "../features/movie/movieSlice"
import { selectUserName } from "../features/user/userSlice"
import { selectUnico } from "../features/movie/movieSlice";
import { Link } from "react-router-dom";

const Unico = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const movies = useSelector(selectUnico)
    let unicos = [];

    useEffect(() => {
        
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                
                switch (doc.data().type) {
                    case "unico":
                        unicos = [...unicos, { id: doc.id, ...doc.data() }];
                        break;                    
                }
            })
            dispatch(
                setMovies({
                    unico: unicos,
                    
                })
            )
        })
    }, [userName]);

    return (
        <Container>
            
        <Content>
            {
                movies &&
                movies.map((movie, key) => (
                    <Wrap key={key}>
                        {movie.id}
                        <Link to={`/detail/` + movie.id}>
                            <img src={movie.cardImg} alt={movie.title} />
                        </Link>
                    </Wrap>
                ))
            }

        </Content>
          
        </Container>
    )
}


 export default Unico;
