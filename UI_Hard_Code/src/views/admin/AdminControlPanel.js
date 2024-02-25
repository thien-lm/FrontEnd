import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
import InputPage from './InputInformation';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [courseName, setName] = useState('');
  const [courseDescription, setDescription] = useState('');
  const [courseImg, setImg] = useState('')
  const [courseCost, setCost] = useState('')
  const [courseRating, setRating] = useState('')
  const [createdAt, setCreateAt] = useState('')
  const [courseTotalStudent, setStudents] = useState('')
  const [lastUpdate, setLastUpdate] = useState('')
  const [categoryID, setCategory] = useState('')
  const [userID, setUserID] = useState('')
  const [courseID, setCourseID] = useState('')
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/course', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const createUser = async () => {
    try {
      await axios.post('http://localhost:8080/api/course', { courseName, courseDescription, courseImg, courseCost, courseRating, createdAt, courseTotalStudent, lastUpdate, categoryID, userID }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
      setCourseID('')
      setName('');
      setDescription('');
      setImg('')
      setCost('')
      setRating('')
      setCreateAt('')
      setStudents('')
      setLastUpdate('')
      setCategory('')
      getUsers();
      alert('thêm thành công')
    } catch (error) {
      alert('Điền sai hoặc thiếu thông tin')
      console.error('Error creating user:', error);
    }
  };

  const clearCellInput =() => {
    setCourseID('')
    setName('');
    setDescription('');
    setImg('')
    setCost('')
    setRating('')
    setCreateAt('')
    setStudents('')
    setLastUpdate('')
    setCategory('')
    setUserID('')
    setSelectedUserId(null)
  }

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:8080/api/course`, { courseID, courseName, courseDescription, courseImg, courseCost, courseRating, createdAt, courseTotalStudent, lastUpdate, categoryID, userID }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
      setCourseID('')
      setName('');
      setDescription('');
      setImg('')
      setCost('')
      setRating('')
      setCreateAt('')
      setStudents('')
      setLastUpdate('')
      setCategory('')
      setUserID('')
      setSelectedUserId(null);
      getUsers();
      alert("cập nhật thành công")
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/api/course/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
      getUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const selectUser = (user) => {
    setCourseID(user.courseID)
    setName(user.courseName);
    setDescription(user.courseDescription);
    setSelectedUserId(user.courseID);
    setImg(user.courseImg)
    setCost(user.courseCost)
    setRating(user.courseRating)
    setCreateAt(user.createdAt)
    setStudents(user.courseTotalStudent)
    setLastUpdate(user.lastUpdate)
    setCategory(user.categoryID)
    setUserID(user.userID)
  };

  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
      setShowComponent(!showComponent);
  };

  return (
    <div>
      <h2 style={{ padding: "15px 0px 15px 0px" }} onClick={handleClick}>Create or Update Course</h2>
                 {showComponent &&<InputPage clearCellInput = {clearCellInput} selectedUserId={selectedUserId} updateUser={updateUser} createUser={createUser} 
                                  setName = {setName} setCategory={setCategory} setCost={setCost} setCreateAt={setCreateAt} 
                                  setDescription = {setDescription} setImg = {setImg} setLastUpdate={setLastUpdate} setRating={setRating} setStudents={setStudents} setUserID = {setUserID}
                                  courseName={courseName} courseDescription={courseDescription} courseImg={courseImg} 
                                  courseCost ={courseCost} courseRating={courseRating} createdAt={createdAt} lastUpdate={lastUpdate} 
                                  courseTotalStudent ={courseTotalStudent} categoryID={categoryID} userID={userID} />}

      <div>
        <h2 style={{ padding: "15px 0px 15px 0px" }}>Courses</h2>
        <table className='row'>
          <thead className='row'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.courseID} >
                <td>{user.courseID}</td>
                <td>{user.courseName}</td>
                <td>{user.courseDescription}</td>
                <td>
                  <button onClick={() => selectUser(user)}>Edit</button>
                  <button onClick={() => deleteUser(user.courseID)}>Delete</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;


