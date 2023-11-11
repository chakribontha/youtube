import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlices';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const [searchParms] = useSearchParams();

  console.log(searchParms.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, []);

  return (
    <div>
      <iframe
        width="1100"
        height="600"
        src={"https://www.youtube.com/embed/"+searchParms.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage
