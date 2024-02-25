
import { Box, Container, Grid, Modal, Paper, TextField, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { createCourse, getCourseList } from './../../api/course/course';
import CourseThumbnail from "./component/CourseThumbnail";
import CourseDescribe from "./component/CourseDescribe";

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
  const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: 'rgb(245, 245, 250)',
        margin: '12px',
    },
    left: {
        width: '450px'
    },
    right: {
        flex: '1 1 0',
        
    },


    pagination: {
        justifyContent: "center",
        display: "flex",
        marginTop : "32px",
        paddingBottom: "20px"

    },
    content_title: {
        margin:" 20px 0",
        fontSize: "20px",
    },
    course_segment: {
        marginBottom: '100px'
    }
})
)


const CreateCourse = () => {
    const [listCourse, setListCourse] = useState([])
    const [courseName, setCourseName] = useState('')
    const [courseDescription, setCourseDescription] = useState('')
    const [courseCost, setCourseCost] = useState('')
    const [open, setOpen] = React.useState(false);
    const [courseImg, setCourseImg] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAMFBMVEXp7vG6vsHt8vXk6ey3u77R1tna3+Lg5OfAxMfGys3N0dTV2t3Dx8rKztHw9fi9wcS6BRt1AAABXklEQVR4nO3Y4W6DIBQFYLj3CiJ2vP/bDjqJ2JnJkl3M0vP9aWNMzwkiWowBAAAAAAAAAAAAAPhHyLs+TCrxnMT2kYdGAZPyL3fJ5y0KYxDzD4cua27w9/k0iUwf1GW2wjoF+gZWuQAZ9j9Pc90C5FKeZtNtBSjK5Y2mWoDrre5uKuCkrjXHadAGqhaIdTUMbQFabZOoWsDXEWjXOnrko3uk7l0wbyPQJoTSas/ULcC2rPUSmwEIcuykvA7wklLwez7VfJt4RIH8LWuOh+YhzUMKHLX5W+7QAuHlJYXHFKAYvj5f8631IwqQEykL0Um+TQMKUFmPZaVv479dBPW7oD4QT/P1C1CsU/4sXr8AuYuXc+UCl/naBS7ztQtEFHj7Anxp9OP47FS1Asudf06fK8DcpWwkaOyRzL0bJDm/82L9Dq99GySZxgaJKS/Evo/RyQcAAAAAAAAAAAAA0PEJsL8Ran8uBYQAAAAASUVORK5CYII=')
    const  [changeList, setChangeList] = useState(false)
    useEffect(() => {
      // Mã lệnh được thực thi chỉ một lần khi component được render lần đầu tiên
      fngetCourseList()
    }, [changeList]);
    const fngetCourseList = async ()  =>  {
      await getCourseList()
      .then((res) => {
        const myCourse = res.data.filter((ele) => ele.userID == 3)
        setListCourse(myCourse)
      })
      .catch(() => {
       // 
      })
     }
     const handleEmit = () => {
      setChangeList(!changeList)
     }
    const displayModalCreateCourse = () => {
      setOpen(true)
    }
    const classes = useStyle();
    const handleClose = () => setOpen(false);
    const uploadAvatar = () => {
        document.getElementById('avartarInput').click()
    }
    const fnCreateCourse = async () => {
      console.log('ok')
        const course = {
          courseName,
          courseDescription,
          courseImg,
          courseCost,
          courseRating: 5,
          createdAt: new Date(),
          courseTotalStudent: 0,
          lastUpdate: new Date(),
          categoryID: 11,
          userID: 3,
        }
        await createCourse(course)
        .then((res) => {
          console.log('create course', res)
          handleClose()
          alert('Tạo course thành công')
          setChangeList(!changeList)
        })
        .catch((error) => {
          alert('Điền sai hoặc thiếu thông tin')
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
    

    
    return (
      <div style={{padding: '4px 0 600px 0'}}>
        {/* <h2>My course</h2> */}
        <div className="" style= {{display: 'flex', }}>
        <button  style= {{margin: '20px', }}>List course</button>
        <button onClick={displayModalCreateCourse} style= {{margin: '20px 10px', marginLeft: 'auto'}}>Create course</button>
        </div>
        {listCourse.map((item) => {
                  const productInfor = {
                    name: item.courseName,
                    shortDescription: item.courseDescription,
                    salePrice: item.courseCost,
                    originalPrice: item.courseCost,    
                    promotionPercent: 0,
                    courseRating: item.courseRating,
                    lastUpdate: item.lastUpdate
                  }
                  return (
                   <Box className={classes.root}>
                   <Container>
                       <Paper elevation ={0}> 
                       
                       <Grid container spacing={1}>
                           <Grid item  className={classes.left}>
                               <Paper elevation ={0}>
                                   <CourseThumbnail imageUrl={item.courseImg} newWidth= '100%'/>
                               </Paper> 
                           </Grid>
       
                           <Grid item className={classes.right}>
                               <Paper elevation ={0}>
                                  <CourseDescribe data = {productInfor} action='Edit course' courseItem={item} onEvent={handleEmit}/>
                               </Paper> 
                               <Paper elevation ={0}>
                                   {/* <AddToCart data = {productInfor}/> */}
                               </Paper>
                           </Grid>
       
                       </Grid>
                       </Paper>
                   </Container>
               </Box>
                )})}
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
          <button style={{backgroundColor: '#cccccc', padding: '12px', border:'none', color: 'blue'}} onClick={fnCreateCourse}>Create course</button>

            </div>
          </Box>
        </Modal>
      </div>
    );
};

export default CreateCourse;