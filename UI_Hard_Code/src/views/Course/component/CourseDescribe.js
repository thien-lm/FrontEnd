import { Modal, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { deleteCourse, updateCourse } from '../../../api/course/course';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: '12px'
    },

    titleProduct: {
        margin: '0',
        padding: '0',
        fontSize: '20px',
        fontWeight: '500',
        color: '#d82bbbcc'
    },

    describeProduct:{
        color: 'rgb(36, 36, 36)'
    },

    originalPrice: {
        textDecoration: 'line-through'
    },

    promotionPercent: {
        color: "rgb(255, 66, 78)"
    }
    
    



}))
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const CourseDescribe = ({data, action,courseItem = {}, onEvent = () => {}}) => {
    const [courseImg, setCourseImg] = useState(courseItem.courseImg)
    const [open, setOpen] = React.useState(false);
    const classes= useStyles(); 
    const handleAction = () => {
        if(action == 'Edit course') {
            displayModalCreateCourse()
        }
    }
    const [courseName, setCourseName] = useState(courseItem.courseName)
    const [courseDescription, setCourseDescription] = useState(courseItem.courseDescription)
    const [courseCost, setCourseCost] = useState(courseItem.courseCost)
    const displayModalCreateCourse = () => {
        setOpen(true)
    }
    const handleClose = () => setOpen(false);
    const uploadAvatar = () => {
        document.getElementById('avartarInput').click()
    }
    const fnCreateCourse = async () => {
          const course = {
            courseID: courseItem.courseID,
            courseName,
            courseDescription,
            courseImg,
            courseCost,
            courseRating: courseItem.courseRating,
            createdAt: courseItem.createdAt,
            courseTotalStudent: courseItem.courseTotalStudent,
            lastUpdate: new Date(),
            categoryID: courseItem.categoryID,
            userID: courseItem.userID,
          }
          await updateCourse(course)
          .then( (res) => {
            console.log('create course', res)
            handleClose()
            alert('Update course thành công')
            onEvent()
          })
          console.log('hhh')
      }
      const courseImgChange = () => {
        const fileInput = document.getElementById('avartarInput')
        const file = fileInput.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const imageData = e.target.result;
            // Sử dụng dữ liệu hình ảnh ở đây
            setCourseImg(imageData)
            console.log(imageData);
          };
        
          reader.readAsDataURL(file);
        }
      };
      const fnDeleteCourse = async () => {
           await deleteCourse(courseItem.courseID)
           .then(() => {
             alert('delete course success')
             onEvent()
           })
      }
    return (
        <Box  className={classes.root}>
            <h3 className={classes.titleProduct}>
                {data.name}
            </h3>
            <p className={classes.describeProduct}>
                {data.shortDescription}
            </p>
            <Box >
            <Box component= "span" fontSize="20px" fontWeight="500" color ="rgb(255, 66, 78)" mr ={1}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.salePrice)}
           </Box>
           <Box component= "span" fontSize="14px"   fontWeight="400"  mr ={1} className={classes.originalPrice}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.originalPrice)}
           </Box>
                <span className={classes.promotionPercent} >{data.promotionPercent > 0?` -${data.promotionPercent}%`: ''}</span>
            </Box>
            {/* <Box>
            <span>Lần cập nhật gần đây nhất {data.lastUpdate.slice(0, data.lastUpdate.indexOf("T"))}</span>

            </Box> */}
            <Box component= "span" fontSize="20px" fontWeight="500" color ="rgb(255, 66, 78)" mr ={1}>
              <button style={{backgroundColor: '#F0E68C'}} onClick={handleAction}>{action}</button>
              {action  == 'Edit course' && (
            <button style={{backgroundColor: '#F0E68C', marginLeft: '20px'}} onClick={fnDeleteCourse}>delete course</button>
           )}
           </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div onClick={uploadAvatar} >
              <img src={courseImg} style={{width: '250px', height: 'auto'}} />
            </div>
            <div style={{padding: '10px 0px', margin: '10px 0px'}} className="">
            <input onChange={courseImgChange} type="file" id="avartarInput" style={{display: 'none',}} />
            </div>
            <div className="" style={{padding: '10px 0px', margin: '10px 0px'}}>
            <TextField fullWidth  label="course name" value={courseName} variant="outlined" onChange={(e) => {setCourseName(e.target.value)}} />
            </div>
            <div className="">
            <TextField fullWidth style={{padding: '10px 0px', margin: '10px 0px'}}  label="course description" value={courseDescription} variant="outlined" onChange={(e) => {setCourseDescription(e.target.value)}} />
            </div>
            <div className="">
            <TextField fullWidth style={{padding: '10px 0px', margin: '10px 0px'}} label="course cost" value={courseCost} variant="outlined" onChange={(e) => {setCourseCost(e.target.value)}} />
            </div>
            <div className="">
              <button style={{backgroundColor: '#cccccc', padding: '12px', border:'none', color: 'blue'}} onClick={fnCreateCourse}>Update course</button>
            </div>
          </Box>
        </Modal>
        </Box>
    );
};

export default CourseDescribe;