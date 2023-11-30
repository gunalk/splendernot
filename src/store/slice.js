import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  BookDetails:[
    {
      title:"The Great Gatsby",
      author:"American writer F. Scott Fitzgerald",
      coverDetails:"https://upload.wikimedia.org/wikipedia/en/c/c2/TheGreatGatsby2013Poster.jpg"

    },
    {
      title:"to kill a mockingbird",
      author:"Harper Lee",
      coverDetails:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"

    },
    {
      title:"The Catcher in the Rye",
      author:" J. D. Salinger",
      coverDetails:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/220px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg"

    },
    {
      title:"Catch-22",
      author:" Joseph Heller",
      coverDetails:"https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Catch22.jpg/220px-Catch22.jpg"

    },
    {
      title:"Ulysses ",
      author:" James Joyce",
      coverDetails:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/JoyceUlysses2.jpg/220px-JoyceUlysses2.jpg"

    }
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    deleted:(state,action)=>{
      state.BookDetails=action.payload
    },
    saved:(state,action)=>{
      state.BookDetails=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {deleted,saved } = counterSlice.actions

export default counterSlice.reducer