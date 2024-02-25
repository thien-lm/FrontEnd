import Course from "../../components/course/Course"
import Navigation from '../../components/Navigation/Navigation'
import FooterContainer from './../../container/FooterContainer';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import './style.css';
import { useParams } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';

const SearchResultComponent = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [teacherData, setTeacherData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch video data from API using Axios
        axios.get('http://localhost:8080/api/course', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
        })
            .then((response) => {
                let returnArray = []
                let resObj = response.data
                for (let i = 0; i < resObj.length; i++) {
                    if (resObj[i]["userID"] == id) {
                        returnArray.push(resObj[i]);
                    }
                }

                setData(returnArray);
                console.log(returnArray)
            })
            .catch((error) => {
                console.error('Error fetching video data:', error);
            });
    }, []);

    useEffect(() => {
        // Fetch video data from API using Axios
        axios.get(`http://localhost:8080/api/teacher/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
        })
            .then((response) => {
                let resObj = response.data
                setTeacherData(resObj);
                console.log(resObj)
            })
            .catch((error) => {
                console.error('Error fetching video data:', error);
            });
    }, []);

    const redirectTeacherDetail = (id) => {
        navigate(`/learn/course/${id}`)
    }
    return (
        <div>
            <Navigation />

            <h1 style={{ padding: "20px" }}>Thông tin giảng viên</h1>
            <div className="person-data">
                <div className="person-image">
                <img src={teacherData.img} alt="Image" className="card-image" />
                </div>
                <div className="person-info">
                    <h2>{teacherData.fullName}</h2>
                    <p><strong>Contact: </strong>{teacherData.phoneNumber}</p>
                    <p><strong>About: </strong>{teacherData.intro}</p>
                </div>
            </div>

            <h1 style={{ padding: "40px 0px 30px 0px" }}>Danh sách khóa học của giảng viên:</h1>
            <div className="card-container">
                {data.map((data) => (

                    <div className="card" key={data.courseID}>
                        <a onClick={redirectTeacherDetail(data.courseID)}>
                            <img src={data.courseImg} alt="Image" className="card-image" />
                        </a>
                        <div className="card-content">
                            <h2 className="card-title">{data.courseName}</h2>
                            <p className="card-description"><strong>Đánh giá:</strong> {data.courseRating} sao</p>
                            <p className="card-description"><strong>Số học viên: </strong>{data.courseTotalStudent}</p>
                            <p className="card-description-final"><strong>Mô tả:</strong> {data.courseDescription} </p>
                        </div>
                    </div>
                )
                )}
            </div>
            <FooterContainer />
        </div>
    )
}



export default SearchResultComponent;