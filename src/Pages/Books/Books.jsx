import React, { Suspense } from 'react';
// import { useEffect, useState } from 'react';
import Book from './Book';


const Books = ({ data }) => {
    // const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, []) using another way to laod books data

    // {
    //     allBooks.map(book => <Book key={book.bookId} book={book}></Book>)
    // } this will need to be in suspense not here, but i just put it here for better arrangement
    return (
        <div className='mt-20'>
            <h1 className='playfair text-[40px] font-bold text-center'>Books</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5'>
                <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
                    {
                        data.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;