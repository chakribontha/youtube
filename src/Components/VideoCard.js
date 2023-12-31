import React from "react";

const VideoCard = ({ info }) => {
  
  if (!info) {
    return null;
  }

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
        <div className="p-2 m-2 w-72 shadow-lg h-full">
        {/* // width there w - 72 */}
      <img  className="rounded-lg" alt="video" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
