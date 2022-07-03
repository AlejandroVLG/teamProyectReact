import { createSlice } from "@reduxjs/toolkit";
 
export const filmSlice = createSlice({
    name: 'film',
    initialState: {
        films: []
    },
    reducers: {
        addFilmData: (state, action) => {
            state.films = action.payload
        },
        removeCard: (state, action) => {
            let key = state.films.filter(film => {
                film.id === action.payload
            })
        }
    }
})

export const { addFilmData, removeCard } = filmSlice.actions

export const selectFilm = (state) => {
    console.log(state)
    return state.film.films
}

export default filmSlice.reducer

