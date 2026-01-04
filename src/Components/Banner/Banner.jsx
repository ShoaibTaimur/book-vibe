import React from 'react';

const Banner = () => {
    return (
        <div className='px-20 py-20 bg-[rgba(19,19,19,0.05)] rounded-2xl flex flex-col lg:flex-row justify-between items-center'>
            <div className='space-y-4 lg:space-y-8 mb-9 flex flex-col'>
                <h1 className='playfair text-[40px] lg:text-[56px] text-center lg:text-left font-bold'>Books to freshen up your bookshelf</h1>
                <div className='flex justify-center lg:justify-start'>
                    <button className='px-7 py-3 bg-[#23BE0A] work-sans text-white font-bold rounded-lg w-47.5'>View The List</button>
                </div>
            </div>
            <div>
                <img className='w-70 lg:w-79.5' src="books.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;