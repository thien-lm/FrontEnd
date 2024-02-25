import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

const VideoList = ({ onVideoClick, id, exam }) => {
    const navigate = useNavigate();
  let [videos, setVideos] = useState([]);
  let videoExam = (exam == "Hiện không có bài tập" ? "" : "có bài tập")

  useEffect(() => {
    // Fetch video data from API using Axios
    axios.get(`http://localhost:8080/api/course-segments/course/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
      .then((response) => {
        
        let resObj = response.data

        for(let i = 0; i < resObj.length; i++) {
          let url = resObj[i]["content"] // Update the videos state with the retrieved data      
          const startIndex = url.indexOf("v=") + 2; // Adding 2 to skip "v="
          const endIndex = url.indexOf("&", startIndex); // Find the first occurrence of "&" after "v="
          const videoId = url.substring(startIndex, endIndex);
          resObj[i]["embedId"]   = videoId
        }

        setVideos(resObj);

      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, []);

  console.log(videos)

  const handleClick = (embedId) => {
    onVideoClick(embedId); // Call the onVideoClick handler with the selected embedId
    navigate(`/learn/course/${id}/${embedId.embedId}`);
  };

  return (
    <div className="video-list">
      <h1>Video List</h1>
      <ul>
        {videos.map((video, index) => (
          <li key={index} onClick={() => handleClick(video)}>
              <h3>{index + 1}. {video.description}</h3>
              {/* <h5 style={{color:"red", margin:"0px 0px 0px 20px"}}>{videoExam}</h5> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;