import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import BookItems from './Components/BookItems/BookItems'
import BookList from './Components/BookList/BookList'
import Form from './Components/Form/Form'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookItems/>}/>
        <Route path="/BookList/:title" element={<BookList/>}/>
        <Route path="/add" element={<Form/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Router