import React from "react";
// import { Books } from "../page";

interface Param {
  params: {
    id: string;
  };
}

interface Book {
  id: number;
  name: string;
  author: string;
  type: string;
  price: number;
  "current-stock": number;
  available: boolean;
}

export async function generateStaticParams() {
  const posts = await fetch("https://simple-books-api.glitch.me/books").then(
    (res) => res.json()
  );

  return posts.map((book: any) => ({
    id: book?.id?.toString(),
  }));
}

const page = async ({ params }: Param) => {
  console.log(params.id);
  const bookApi = await fetch(
    `https://simple-books-api.glitch.me/books/${params.id}`
  );
  const book: Book = await bookApi.json();
  // console.log(book)
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-gray-600">
      <div
        className="bg-gray-200 p-5 rounded-md relative h-48 space-y-1"
        key={book.id}
      >
        <h1 className="font-bold text-2xl">{book.name}</h1>
        <p className="text-md font-semibold">
          <strong>Author: </strong>
          {book.author}
        </p>
        <span className="block text-xs font-semibold">
          <strong>Type:</strong> {book.type}
        </span>
        <span className="block text-sm font-semibold">
          <strong>Stock:</strong> {book["current-stock"]}
        </span>
        <span className="block text-lg font-bold">${book.price}</span>
        <button
          className={`${
            !book.available ? "cursor-not-allowed bg-opacity-75" : ""
          } text-xs bg-gray-900 text-gray-100 px-3 py-1 rounded absolute right-5 bottom-5`}
          disabled={!book.available}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default page;
