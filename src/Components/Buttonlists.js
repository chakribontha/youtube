import React from 'react'
import Button from './Button'

const list = [
  "All",
  "Gaming",
  "Songs",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Music",
  "Cars",
  "Physics",
  "Tamil",
  "Recently",
  "New to you",
  "Music",
  "Cars",
  "Physics",
  "Tamil",
  "Recently",
];
const Buttonlists = () => {
  return (
    <div className="flex w-screen overflow-x-auto whitespace-nowrap border border-b-black overflow-hidden">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
}

export default Buttonlists
