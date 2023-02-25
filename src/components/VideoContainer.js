import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';

const VideoContainer = () => {
  //We need a state variable to loop on this videos
  const [videos,setvideos] = useState([]);
  useEffect(() =>{
    getVideos();
  },[])
  const getVideos = async ()=>{
  const data= await fetch("YOUTUBE_VIDEO_API")
  const json = await data.json();
  
  setvideos(json.items);
};
  return (

    <div>
      <VideoCard info={videos[0]}/>
    </div>
  )
}

export default VideoContainer