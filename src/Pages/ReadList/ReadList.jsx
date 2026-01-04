import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilities/addToDB';
import Book from '../Books/Book';

const ReadList = () => {
    const [sort,setSort]=useState([]);
    const handleSort=(type)=>{
        setSort(type);
        if(type=="pages"){
            const sortedByPage=[...bookMarked].sort((a,b)=>a.totalPages-b.totalPages)
            setBookMarked(sortedByPage)
        }
        if(type==="ratings"){
            const sortedByRatings=[...bookMarked].sort((a,b)=>a.rating-b.rating)
            setBookMarked(sortedByRatings);
        }
    }

    const [bookMarked, setBookMarked] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        const storedData = getStoredBook();
        const convertedStoredData = storedData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredData.includes(book.bookId))
        setBookMarked(myReadList);
    }, [data])

    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Sort by : {sort? sort:""}</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
                    <li><a onClick={()=>handleSort("ratings")}>Ratings</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read book list</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2>Marked to read {bookMarked.length}</h2>
                    {
                        bookMarked.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Wishlist</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;