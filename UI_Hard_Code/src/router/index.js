// import React from 'react';
// import { Routes , Route } from 'react-router-dom';
// import SignIn from '../views/auth/signIn/signIn';
// import SignUp from '../views/auth/signUp/signUp';
// import Home from '../views/Home/Home';

// import AdminController from '../views/admin/AdminControlPanel';
// import VideoDisplayer from '../views/video/VideoContainer';
// import TeacherContainer  from '../views/teacher/TeacherComponent';
// import  ParentComponent from '../views/searchResult/ContainerSearchResult'
// import TeacherCourseContainer from '../views/teacher/TeacherCourseContainer';
// import BlogContainer from "../views/blog/BlogContainer"

// import CourseDetail from '../views/Course/CourseDetail';
// import FooterContainer from '../container/FooterContainer';
// import HeaderContainer from '../container/HeaderContainer';

// const Routers = () => {
//   return (
//     <Routes >
//       <HeaderContainer />
//         <Route exact path="/" element={<Home />} /> 
//         <Route path="/course/:id" element={<CourseDetail/>} />
//       <Route element={<FooterContainer />} />
//       <Route path="/signIn" element={<SignIn/>} />
//       <Route path="/signUp" element={<SignUp/>} />
//       <Route path="/adminPage" element={<AdminControllerWrapper />} />
//       <Route path="/learn/course/:id" element={<VideoDisplayer />} />
//       <Route path="/teacher" element={<TeacherContainer />} />
//       <Route path="/teacher/:id" element={<TeacherCourseContainer />} />
//       <Route path="/search" element={<ParentComponent />} />
//       <Route path="/blog" element={<BlogContainer />} />
//     </Routes>
//   );
// };
// const AdminControllerWrapper = () => {
//   return <AdminController />;
// }

// export default Routers;
