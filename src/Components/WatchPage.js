import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch()
  }, []);

  return (
    <div>
      watchpage
    </div>
  )
}

export default WatchPage
