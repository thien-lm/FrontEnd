import React, { useState, useEffect } from 'react';
import Video from './VideoDisplayer';
import VideoList from './VideoList2';
import './style.css';
import { useParams } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation'
import FooterContainer from './../../container/FooterContainer';
import axios from 'axios';
// import { Link, useHistory } from 'react-router-dom';

const VideoContainer = () => {
  const { id, videoid } = useParams();
  const [embedId, setEmbedId] = useState(videoid); // Initial embedId state
  const [name, setName] = useState(null); 
  const [description, setDescription] = useState(null); 
  const [segment, setSegment] = useState(2); 
  const [exam, setExam] = useState(null);

  const handleVideoClick = (video) => {
    setEmbedId(video.embedId); // Update the embedId state when a video is clicked
    setName(video.lectureName);
    setDescription(video.description)
    setSegment(video.segmentID)
  };

  useEffect(() => {
    // Fetch video data from API using Axios
    axios.get(`http://localhost:8080/api/exam/segment/${segment}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    })
      .then((response) => {
        let resObj = response.data
        console.log(resObj[0])
        setExam(resObj[0] ===  undefined ? "Hiện không có bài tập" : resObj[0].examLink);
        if(resObj[0] !==  undefined) {
          alert("bài học này có phần bài tập")
        }
    })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, [description]);

  

  return (
    <div>
      <Navigation />
      <Video embedId={embedId || "qyFnMtMM7Qk"} />
      <h1 style={{padding: "10px"}}>{name}</h1>
      <h3 style={{padding: "10px"}}>{description}</h3>
      <h3 style={{padding: "10px"}}>Bài tập, khuyến khích hoàn thành:</h3>
      <h4 style={{padding: "10px"}}><a href={exam } target="_blank" rel="noopener noreferrer">{exam}</a></h4>
      <div >
        <VideoList onVideoClick={handleVideoClick} id={id} exam={exam}/> {/* Pass the click handler as a prop */}
      </div>
      <FooterContainer />
    </div>
  );
};

export default VideoContainer;