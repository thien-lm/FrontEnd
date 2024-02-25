import Course from "../../components/course/Course"
import Navigation from '../../components/Navigation/Navigation'
import FooterContainer from './../../container/FooterContainer';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../teacher/style.css';

const checkTwoString = (str1, str2) => {
    let indexOfPrevChar = 0;//previous element's posistion of str1 that we found in str2
    outerlopp:
    for (let i = 0; i < str1.length; i++) {
        for (let j = indexOfPrevChar; j < str2.length; j++) {
            if (str1.charAt(i) == str2.charAt(j)) {
                indexOfPrevChar = j;
                if (i == str1.length - 1) return true;
                break;
            } else if (j == str2.length - 1) return false;
        }
    }
    return false;
}

const SearchResultComponent = ({ input = "wEb" }) => {

    const [data, setData] = useState([]);

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
                    if (checkTwoString(input.toLocaleLowerCase(), resObj[i]["courseName"].toLocaleLowerCase())) {
                        returnArray.push(resObj[i]);
                    }
                }

                setData(returnArray);
                console.log(returnArray)
            })
            .catch((error) => {
                console.error('Error fetching video data:', error);
            });
    }, [input]);


    return (
        <div>
            <h1 style = {{margin: "0px 0px 0px 30px"}}> search result for your request: </h1>
            <div className="card-container">
                {data.map((data) => (
                    <div className="card" key = {data.courseID}>
                        <a href={`http://localhost:3000/learn/course/${data.courseID}`}>
                            <img src={data.courseImg} alt="Image" className="card-image" />
                        </a>
                        <div className="card-content">
                            <h2 className="card-title">{data.courseName}</h2>
                            <p className="card-description"><strong>Đánh giá: </strong>{data.courseRating} sao</p>
                            <p className="card-description"><strong>Mô tả: </strong>{data.courseDescription}</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}



export default SearchResultComponent;