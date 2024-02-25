import React, { useState , useEffect} from 'react';
import axios from 'axios';
import './style.css';
import Navigation from '../../components/Navigation/Navigation'
import FooterContainer from './../../container/FooterContainer';

const TeacherContainer = () => {
    const [data, setData] = useState([]); // Initial embedId state


    useEffect(() => {
        // Fetch video data from API using Axios
        axios.get('http://localhost:8080/api/teacher', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
        })
            .then((response) => {
                let resObj = response.data
                setData(resObj);

            })
            .catch((error) => {
                console.error('Error fetching video data:', error);
            });
    }, []);
    console.log(data)

    return (
    <div>
        <Navigation>
        </Navigation>
        <h1 style={{margin:"20px"}}>Danh sách giảng viên</h1>
    <div className="card-container">
        {data.map((data) => (
            <div className="card" key = {data.teacherId}>
            <a href={`http://localhost:3000/teacher/${data.teacherId}`}>  
            <img src={data.img} alt="Image" className="card-image" />
            </a>  
            <div className="card-content">
                <h2 className="card-title">{data.fullName}</h2>
                <p className="card-description">{data.intro}</p>
                </div>
            </div>
        )
        )}
        </div>    
        <FooterContainer>

        </FooterContainer>
        </div>

    );
};

export default TeacherContainer;