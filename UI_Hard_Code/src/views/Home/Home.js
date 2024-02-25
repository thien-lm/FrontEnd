import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CourseDetail from '../Course/CourseDetail';
import HomeBody from './HomeBody';
import HeaderContainer from '../../container/HeaderContainer';
import FooterContainer from '../../container/FooterContainer';
import CreateCourse from '../Course/CreateCourse';
// import TeacherInfor from '../teacher/TeacherInfor';
// import SignTeacher from '../teacher/SignTeacher';
import TeacherInfor from '../teacher/TeacherInfor';

const Home = () => {
    return (
        <div>
            <HeaderContainer />
            <Routes>
                <Route path= "/*" element = { <HomeBody />} />
                <Route path= "course/:id/*" element =  { <CourseDetail /> } />   
                <Route path= "create-course" element =  { <CreateCourse /> } />
                <Route path= "/sign-in-teacher" element =  { <TeacherInfor /> } />
                {/* <Route path= "/blog/my-blog" element =  { <MyBlog /> } />       */}
            </Routes>
            <FooterContainer />
        </div>
    );
};

export default Home;