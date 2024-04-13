import { useLoaderData } from "react-router-dom";


const EstateSEction = () => {
    const estateHomes=useLoaderData()
    return (
        <div>
            <div>
           <h2 className="text-4xl font-bold text-center mt-5">Books</h2>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {
                estateHomes.map(book=><SingleBook key={book.bookId} book={book}></SingleBook>)
            }
            </div>
        </div>
    );
};

export default EstateSEction;