import Link from "next/link";
import React from "react";

 export interface Books {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const page = async () => {
  const bookApi = await fetch("https://simple-books-api.glitch.me/books");
  const bookData = await bookApi.json();
  // console.log(bookData)
  return (
    <div className="bg-gray-700 w-full h-[100vh] flex justify-center items-center">
      <div className="grid grid-cols-3 gap-10">
        {bookData.map((book: Books) => (
          <div key={book.id} className="bg-gray-300 p-5 rounded-md relative h-32">
            <h1 className="font-bold text-lg">{book.name}</h1>
            <span className="block text-xs">{book.type}</span>
            <Link className="absolute right-5 bottom-5 text-xs bg-gray-900 px-3 py-1 rounded text-gray-100" href={`/books/${book.id}`}>More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
