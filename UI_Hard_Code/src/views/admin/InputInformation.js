import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

const InputPage = ({clearCellInput, courseDescription, createdAt, lastUpdate,categoryID, userID, courseCost, courseImg, courseRating, courseTotalStudent, courseName, selectedUserId, updateUser, createUser, setName, setCategory, setCost, setCreateAt, setDescription, setImg, setLastUpdate, setRating, setStudents, setUserID}) => {


    return (
        <div className="course-form">
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="courseDescription">Course Description:</label>
          <input
            type="text"
            id="courseDescription"
            value={courseDescription}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="courseImg">Course Image:</label>
          <input
            type="text"
            id="courseImg"
            value={courseImg}
            placeholder="Image"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="courseCost">Course Price:</label>
          <input
            type="text"
            id="courseCost"
            value={courseCost}
            placeholder="Price"
            onChange={(e) => setCost(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="courseRating">Course Rating:</label>
          <input
            type="text"
            id="courseRating"
            value={courseRating}
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="createdAt">Created At:</label>
          <input
            type="text"
            id="createdAt"
            value={createdAt}
            placeholder="Created At"
            onChange={(e) => setCreateAt(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="courseTotalStudent">Total Students:</label>
          <input
            type="text"
            id="courseTotalStudent"
            value={courseTotalStudent}
            placeholder="Total Students"
            onChange={(e) => setStudents(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="lastUpdate">Last Update:</label>
          <input
            type="text"
            id="lastUpdate"
            value={lastUpdate}
            placeholder="Last Update"
            onChange={(e) => setLastUpdate(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="categoryID">Category ID:</label>
          <input
            type="text"
            id="categoryID"
            value={categoryID}
            placeholder="Category ID"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        {/* <div>
          <label htmlFor="userID">User ID:</label>
          <input
            type="text"
            id="userID"
            value={userID}
            placeholder="User ID"
            onChange={(e) => setUserID(e.target.value)}
          />
        </div> */}
        {selectedUserId ? (
          <button style={{width: "10%", margin: "0% 0% 0% 50%"}} onClick={updateUser}>Update</button>
        ) : (
          <button style={{width: "10%", margin: "0% 0% 0% 50%"}} onClick={createUser}>Create</button>
        )}
        <button style={{width: "10%", margin: "1% 0% 0% 50%"}} onClick={clearCellInput}>clear</button>
      </div>
    )

}

export default InputPage;