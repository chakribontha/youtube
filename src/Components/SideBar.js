import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="p-5 shadow-lg w-72 bg-white rounded-lg">
      <ul className="mb-8">
        <li className="mb-2">
          <Link
            to="/"
            className="text-blue-600 no-underline hover:bg-gray-100 px-3 py-2 rounded"
          >
            Home
          </Link>
        </li>
        
        <li className="mb-2">
          <Link
            to="/trending"
            className="no-underline hover:bg-gray-100 px-3 py-2 rounded"
          >
            Trending
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/subscriptions"
            className="no-underline hover:bg-gray-100 px-3 py-2 rounded"
          >
            Subscriptions
          </Link>
          <ul className="ml-4">
            <li className="mb-2 hover:bg-gray-100 rounded">
              <Link to="/music" className="no-underline text-gray-700">
                Music
              </Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 rounded">
              <Link to="/sports" className="no-underline text-gray-700">
                Sports
              </Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 rounded">
              <Link to="/gaming" className="no-underline text-gray-700">
                Gaming
              </Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 rounded">
              <Link to="/movies" className="no-underline text-gray-700">
                Movies
              </Link>
            </li>
           
          </ul>
        </li>
        <li className="mb-2">
          <Link
            to="/library"
            className="no-underline hover:bg-gray-100 px-3 py-2 rounded"
          >
            Library
          </Link>
          <ul className="ml-4">
            <li className="mb-2 hover:bg-gray-100 rounded">
              <Link to="/history" className="no-underline text-gray-700">
                History
              </Link>
            </li>
            <li className="mb-2 hover:bg-gray-100 rounded">
              <Link to="/your-videos" className="no-underline text-gray-700">
                Your videos
              </Link>
            </li>
          
          </ul>
        </li>
        <li className="mb-2">
          <Link
            to="/history"
            className="no-underline hover:bg-gray-100 px-3 py-2 rounded"
          >
            History
          </Link>
        </li>
      </ul>

     
    </div>
  );
};

export default SideBar;
