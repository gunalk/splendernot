import React,{useState} from 'react'
import "./BookItems.css"
import {useSelector,useDispatch} from "react-redux"
import { deleted,saved } from '../../store/slice'
import {useNavigate} from "react-router-dom"
const BookItems = () => {
    const bookDetails=useSelector((state)=>state.counter.BookDetails)
    
    const dispatch=useDispatch()
    const navigate=useDispatch()
    const [search,setSearch]=useState('')
    const [edit,setEdit]=useState(true)
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [newTitle,setNewTitle]=useState('')
    const [newAuthor,setNewAuthor]=useState('')
    const handleDelete=(book)=>{
       let deletedBooks= bookDetails.filter((ele)=>ele.title!==book)
    dispatch(deleted(deletedBooks))
    }

    const handleEdit=(book)=>{
        setTitle(book.title)
        setAuthor(book.author)
        setEdit(false)
     }

     const handleSave=()=>{
        let savedData=bookDetails.map((ele)=>ele.title===title? 
       {
        ...ele,title:newTitle,author:newAuthor
       }:ele)
    dispatch(saved(savedData))
    setEdit(true)
     }
  return edit ? (
    <div>
        <div className="input-container">
            <input placeholder='searchBooks' onChange={(e)=>setSearch(e.target.value)} className='form-control' type="text"/>
           
        </div>
        <button onClick={()=>{navigate("/add")}}className="btn btn-primary">Add Books</button>
        <div className='flex-books'>
            {
                bookDetails.filter((books)=>books.title.toLowerCase().includes(search.toLowerCase())).map((book)=>
                {
                    return (<div className="book-items">
                    <img src={book.coverDetails} alt="book-Cover-image"/>
                    <h2>{book.title}</h2>
                    <h4>{book.author}</h4>
                    <button onClick={()=>{handleDelete(book.title)}} className='btn btn-warning yellow'>Delete</button>
                   
                    <div><button   onClick={()=>handleEdit(book)} className='btn btn-warning  yellow3' >Edit</button></div>
                </div>)
                        
                        
                })
            }
        </div>
    </div>
  ):(
    <div style={{marginLeft:"500px"}}>
   
    <h2>Title</h2>
    <input onChange={(e)=>{setNewTitle(e.target.value)}}value={title} type="text" />
    <br></br>
    <h2>Author</h2>
    <input onChange={(e)=>{setNewAuthor(e.target.value)}} value={author} type="text" />
    <br></br>
    <button style={{width:"100px",marginTop:"20px"}}className='btn btn-danger' onClick={handleSave}>save</button>
    
    
    </div>
  )
}

export default BookItems