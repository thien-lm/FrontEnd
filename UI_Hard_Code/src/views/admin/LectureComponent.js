import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

const LecturePage = () => {
  const [users, setUsers] = useState([]);
  const [segmentID, setSegmentID] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('')
  const [courseID, setCourseID] = useState('')

  const [selectedUserId, setSelectedUserId] = useState(null);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/coursesegment',{
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
      await axios.post('http://localhost:8080/api/blog', {    segmentID, description, content, content, courseID },{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
      setBlogID('')
      setCategory('')
      setName('')
      setContent('')
      setImage('')
      setUserID('')
      getUsers();
    } catch (error) {
      alert('Điền sai hoặc thiếu thông tin')
      console.error('Error creating user:', error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:8080/api/blog`, {  blogID, category, name, content, image, userID},{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
      setBlogID('')
      setCategory('')
      setName('')
      setContent('')
      setImage('')
      setUserID('')
      setSelectedUserId(null);
      getUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/api/blog/${userId}`,{
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
    setBlogID(user.blogID)
    setCategory(user.category)
    setContent(user.content)
    setImage(user.image)
    setName(user.name)
  };

  return (
    <div>
      <div>
        <h2>Create or Update Blog</h2>
        <div className="course-form">
        
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="courseDescription">Course Description:</label>
          <input
            type="text"
            id="courseDescription"
            value={category}
            placeholder="Description"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="courseImg">Course Image:</label>
          <input
            type="text"
            id="courseImg"
            value={image}
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="courseCost">Course Price:</label>
          <input
            type="text"
            id="courseCost"
            value={blogID}
            placeholder="Price"
            onChange={(e) => setBlogID(e.target.value)}
          />
        </div>

        {selectedUserId ? (
          <button style={{width: "10%", margin: "0% 0% 0% 50%"}} onClick={updateUser}>Update</button>
        ) : (
          <button style={{width: "10%", margin: "0% 0% 0% 50%"}} onClick={createUser}>Create</button>
        )}
      </div>
    </div>

      <div>
        <h2>Courses</h2>
        <table>
          <thead>
            <tr>         
              <th>ID</th>
              <th>Name</th>
              <th>description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.blogID} >
                <td>{user.blogID}</td>
                <td>{user.name}</td>
                <td>{user.category}</td>
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

export default LecturePage;

