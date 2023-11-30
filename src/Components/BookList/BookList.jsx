import React,{useParams} from 'react'

const BookList = () => {
    const {title}=useParams()
    const bookDetails=useSelector((state)=>state.counter.BookDetails)
    let details= bookDetails.map((ele)=>ele.title==title)
    
  return (
    <div>
        <div className='flex-books'>
            {
                details.map((book)=>
                {
                    return (<div className="book-items">
                    <img src={book.coverDetails} alt="book-Cover-image"/>
                    <h2>{book.title}</h2>
                    <h4>{book.author}</h4>
                   
                   
                </div>)
                        
                        
                })
            }
        </div>
    </div>
  )
}

export default BookList