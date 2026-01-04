import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const bookDetail = books.find(book => book.bookId === parseInt(id));
    const { bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = bookDetail;
    return (
        <div className='grid grid-cols-2 gap-7 mb-41 mt-5'>
            <div className='bg-[rgba(19,19,19,0.05)] p-18.25 flex justify-center rounded-xl'>
                <img className='h-111' src={image} alt="" />
            </div>
            <div>
                <h1 className='playfair text-[35px] font-bold'>{bookName}</h1>
                <p className='work-sans text-[16x] font-medium'>By: {author}</p>
                <div className="border-t-2 border-dashed border-[#d7d7d7] my-2"></div>
                <p className='work-sans font-medium'>{category}</p>
                <div className="border-t-2 border-dashed border-[#d7d7d7] my-2"></div>
                <p className='work-sans text-[14px] font-light'><span className='font-extrabold'>Review: </span><span className='opacity-70'>{review}</span></p>
                <div className='mt-5 space-x-5'>
                    <span className='work-sans font-bold'>Tag</span>
                    {
                        tags.map((tag, i) => <div key={i} className="badge bg-[rgba(35,190,10,0.05)] work-sans text-[12px] font-medium text-[#23BE0A]">{tag}</div>)
                    }
                </div>
                <div className="border-t-2 border-dashed border-[#d7d7d7] my-2"></div>
                <div className='my-5'>
                    <p className='work-sans text-[14px] font-bold'><span className='opacity-50'>Number of Pages: </span>{totalPages}</p>
                    <p className='work-sans text-[14px] font-bold'><span className='opacity-50'>Publisher: </span>{publisher}</p>
                    <p className='work-sans text-[14px] font-bold'><span className='opacity-50'>Year of Publishing: </span>{yearOfPublishing}</p>
                    <p className='work-sans text-[14px] font-bold'><span className='opacity-50'>Rating: </span>{rating}</p>
                </div>
                <div>
                    <a className="btn work-sans sm:text-[13px] font-semibold bg-white rounded-xl">Read</a>
                    <a className="btn work-sans sm:text-[13px] font-semibold bg-[#59C6D2] text-white border-none rounded-xl">Wishlist</a>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;