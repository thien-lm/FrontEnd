import { Box, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import CourseThumbnail from './component/CourseThumbnail'
import { useParams } from 'react-router-dom';
import { getCourseDetail } from '../../api/course/course';
import CourseDescribe from './component/CourseDescribe';
import CourseSegment from './component/CourseSegment';
import DocCourse from './component/DocCourse';


const CourseDetail = () => {
    const useStyle = makeStyles(theme => ({
        root: {
            backgroundColor: 'rgb(245, 245, 250)',
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
    const classes = useStyle();
    const { id } = useParams();
    useEffect(() => {
        // Mã lệnh được thực thi chỉ một lần khi component được render lần đầu tiên
        console.log('useEffect được gọi chỉ một lần');
        fnGetCourseDetail()
      }, []);
    const [courseDetail, setCourseDetail] = useState({})
      const fnGetCourseDetail = async ()  =>  {
           await getCourseDetail(id)
           .then((res) => {
             console.log('course detail', res)
             setCourseDetail(res.data)
           })
           .catch(() => {
            // 
           })
      }
      const productInfor = {
        name: courseDetail.courseName,
        shortDescription: courseDetail.courseDescription,
        salePrice: courseDetail.courseCost,
        originalPrice: courseDetail.courseCost,    
        promotionPercent: 0,
        courseRating: courseDetail.courseRating,
        lastUpdate: courseDetail.lastUpdate
      }
    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation ={0}> 
                
                <Grid container spacing={1}>
                    <Grid item  className={classes.left}>
                        <Paper elevation ={0}>
                            <CourseThumbnail imageUrl={courseDetail.courseImg} newWidth= '100%'/>
                        </Paper> 
                    </Grid>

                    <Grid item className={classes.right}>
                        <Paper elevation ={0}>
                           <CourseDescribe data = {productInfor} action = 'Đăng ký học'/>
                        </Paper> 
                        <Paper elevation ={0}>
                            {/* <AddToCart data = {productInfor}/> */}
                        </Paper>
                    </Grid>

                </Grid>
                </Paper>
                <h3 className={classes.content_title}>Tài liệu học tập</h3>
                <Grid className={classes.course_segment} xs={6}>
                    <Paper elevation = {0} >
                    <DocCourse  courseId = {courseDetail.courseID} />
                    {/* <DetailMenu data = {productInfor}/> */}
                    </Paper>
                </Grid>
                <h3 className={classes.content_title}>Nội dung khóa học</h3>
                <Grid className={classes.course_segment} xs={6}>
                    <Paper elevation = {0} >
                    <CourseSegment  courseId = {courseDetail.courseID}/>
                    {/* <DetailMenu data = {productInfor}/> */}
                    </Paper>
                </Grid>

            </Container>
        </Box>
    );
};

export default CourseDetail;