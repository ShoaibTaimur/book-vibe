import { Star } from 'lucide-react';
import React from 'react';

const Book = ({ book }) => {
    const { bookName, image, author, rating, category, tags } = book;
    return (
        <div className="card bg-base-100 shadow-sm p-4">
            {/* Image */}
            <figure className='bg-[rgba(243,243,243,1)] p-8'>
                <img className='h-55'
                    src={image}
                />
            </figure>
            <div className="card-body">
                {/* tags */}
                <div className='space-x-2'>
                    {
                        tags.map(tag => <div className="badge bg-[rgba(35,190,10,0.05)] work-sans text-[12px] font-medium text-[#23BE0A]">{tag}</div>)
                    }
                </div>
                {/* Title */}
                <h2 className="card-title playfair text-[24px] font-bold">
                    {bookName}
                </h2>
                {/* Author */}
                <p className='work-sans text-[13px] font-medium'>By: {author}</p>
                {/* Dashed Line */}
                <div className="border-t-2 border-dashed border-[#d7d7d7] my-2"></div>
                <div className="card-actions justify-between">
                    {/* Category */}
                    <div className="badge work-sans text-[13px] font-medium opacity-70">{category}</div>
                    {/* Rating */}
                    <div className="badge">
                        <p className='work-sans text-[13px] font-medium opacity-70'>{rating}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;