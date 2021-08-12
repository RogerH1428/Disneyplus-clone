import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
  unico: null,
  serie: null,
  movie: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
      state.unico = action.payload.unico;
      state.serie = action.payload.serie;
      state.movie = action.payload.movie;


    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
export const selectUnico = (state) => state.movie.unico;
export const selectSerie = (state) => state.movie.serie;
export const selectMovie = (state) => state.movie.movie;

export default movieSlice.reducer;
