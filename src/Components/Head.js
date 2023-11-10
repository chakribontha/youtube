import React from 'react'

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="menu"
          src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
        />
        <img
          className="h-9 mx-3"
          alt="logo"
          src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-500 rounded-l-full p-2"
          type="text"
        />
        <button className="border border-gray-500 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
      </div>
    </div>
  );
}

export default Head
