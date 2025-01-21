import React, { useState } from "react";
import { Search, IndianRupee, ShoppingCart } from "lucide-react";
const Publication = () => {
  const [books, setBooks] = useState([
    {
      imageUrl:
        "https://worldinboxmag.com/WS/image_resize/?pic=aHR0cHM6Ly93b3JsZGluYm94bWFnLmNvbS9wdWJsaWMvdXBsb2FkL3Byb2R1Y3RfaW1hZ2VzL1BhcGVyX1NldF9UaXRlbF8yMDE5XzE4MDAwLTIwMTkwODA1MTIwOTMwMTg4ODQ0LmpwZw==&height=450&width=350&color=FFFFFF",
      name: "18000+ Questions Paper Set",
      publisher: "World Inbox, Publication",
      originalPrice: "390",
      newPrice: "273",
      discount: "30",
    },
    {
      imageUrl:
        "https://worldinboxmag.com/WS/image_resize/?pic=aHR0cHM6Ly93b3JsZGluYm94bWFnLmNvbS9wdWJsaWMvdXBsb2FkL3Byb2R1Y3RfaW1hZ2VzL1BhcGVyX1NldF9UaXRlbF8yMDE5XzE4MDAwLTIwMTkwODA1MTIwOTMwMTg4ODQ0LmpwZw==&height=450&width=350&color=FFFFFF",
      name: "18000+ Questions Paper Set",
      publisher: "World Inbox, Publication",
      originalPrice: "390",
      newPrice: "273",
      discount: "30",
    },
    {
      imageUrl:
        "https://worldinboxmag.com/WS/image_resize/?pic=aHR0cHM6Ly93b3JsZGluYm94bWFnLmNvbS9wdWJsaWMvdXBsb2FkL3Byb2R1Y3RfaW1hZ2VzL1BhcGVyX1NldF9UaXRlbF8yMDE5XzE4MDAwLTIwMTkwODA1MTIwOTMwMTg4ODQ0LmpwZw==&height=450&width=350&color=FFFFFF",
      name: "18000+ Questions Paper Set",
      publisher: "World Inbox, Publication",
      originalPrice: "390",
      newPrice: "273",
      discount: "30",
    },
    {
      imageUrl:
        "https://worldinboxmag.com/WS/image_resize/?pic=aHR0cHM6Ly93b3JsZGluYm94bWFnLmNvbS9wdWJsaWMvdXBsb2FkL3Byb2R1Y3RfaW1hZ2VzL1BhcGVyX1NldF9UaXRlbF8yMDE5XzE4MDAwLTIwMTkwODA1MTIwOTMwMTg4ODQ0LmpwZw==&height=450&width=350&color=FFFFFF",
      name: "18000+ Questions Paper Set",
      publisher: "World Inbox, Publication",
      originalPrice: "390",
      newPrice: "273",
      discount: "30",
    },
    {
      imageUrl:
        "https://worldinboxmag.com/WS/image_resize/?pic=aHR0cHM6Ly93b3JsZGluYm94bWFnLmNvbS9wdWJsaWMvdXBsb2FkL3Byb2R1Y3RfaW1hZ2VzL1BhcGVyX1NldF9UaXRlbF8yMDE5XzE4MDAwLTIwMTkwODA1MTIwOTMwMTg4ODQ0LmpwZw==&height=450&width=350&color=FFFFFF",
      name: "18000+ Questions Paper Set",
      publisher: "World Inbox, Publication",
      originalPrice: "390",
      newPrice: "273",
      discount: "30",
    },
    {
      imageUrl:
        "https://worldinboxmag.com/WS/image_resize/?pic=aHR0cHM6Ly93b3JsZGluYm94bWFnLmNvbS9wdWJsaWMvdXBsb2FkL3Byb2R1Y3RfaW1hZ2VzL1BhcGVyX1NldF9UaXRlbF8yMDE5XzE4MDAwLTIwMTkwODA1MTIwOTMwMTg4ODQ0LmpwZw==&height=450&width=350&color=FFFFFF",
      name: "18000+ Questions Paper Set",
      publisher: "World Inbox, Publication",
      originalPrice: "390",
      newPrice: "273",
      discount: "30",
    },
    {
      imageUrl:
        "https://worldinboxmag.com/WS/image_resize/?pic=aHR0cHM6Ly93b3JsZGluYm94bWFnLmNvbS9wdWJsaWMvdXBsb2FkL3Byb2R1Y3RfaW1hZ2VzL1BhcGVyX1NldF9UaXRlbF8yMDE5XzE4MDAwLTIwMTkwODA1MTIwOTMwMTg4ODQ0LmpwZw==&height=450&width=350&color=FFFFFF",
      name: "18000+ Questions Paper Set",
      publisher: "World Inbox, Publication",
      originalPrice: "390",
      newPrice: "273",
      discount: "30",
    },
  ]);
  return (
    <>
      <div className="flex items-start justify-start flex-col">
        <div className="min-w-full py-2 px-5 sm:text-xl lg:text-2xl sm:px-10 lg:20">
          Home / <span className="text-light1">Publication</span>
        </div>
        <div className="bg-main2 min-w-full py-3 px-5 sm:px-10 lg:20">
          <div className="flex items-center justify-end mx-2 w-[100%] gap-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-main1 focus:outline-none px-3 py-1 rounded-md w-[80%] max-w-[20rem] "
            />
            <button className="flex justify-start items-center w-10">
              <Search />
            </button>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 sm:px-5 md:px-10 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8 my-10">
        {books.map((book , index) => {
          return (
            <div key={index} className="bg-main3 p-4 rounded-xl hover:shadow-custom-big-light transition-all duration-200 ease-linear hover:bg-main2">
              <img className="h-[23rem]" src={book.imageUrl} alt="" />
              <div className="text-light1 text-xl">{book.name}</div>
              <div className="text-gray-400 text-sm">{book.publisher}</div>
              <div className="flex justify-start items-center gap-3 mt-1 text-red-500 text-lg">
                <div className="flex justify-center items-center text-light6">
                  <IndianRupee className="h-4 w-4" />
                  {book.newPrice}
                </div>
                <div className="line-through">{book.originalPrice} </div>
                <div className=" text-sm">{book.discount}% off</div>
              </div>
              <button className="flex gap-2 items-center bg-main2 py-1 text-md hover:bg-main1 hover:shadow-custom-light transition-all duration-200 ease-linear px-6 rounded-xl border-[1px] hover:border-none">
                <ShoppingCart className="h-5" /> Buy it Now
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Publication;
