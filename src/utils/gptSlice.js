import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleSearchView :(state,action)=>{
         state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload; // Match the dispatched payload
            state.movieNames = movieNames; // Update to match the correct key
            state.movieResults = movieResults;
        }
    }
});

export const{toggleSearchView,addGptMovieResult}=gptSlice.actions;
export default gptSlice.reducer;