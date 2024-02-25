import React, { useEffect, useState } from 'react';
import { getTeacherDetail, signTeacher } from '../../api/teacher/teacher';
import { Box, TextField } from '@material-ui/core';
const style = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    margin: '20px auto',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const TeacherInfor = () => {
    const id = '1'
    const [courseImg, setCourseImg] = useState('https://tse4.mm.bing.net/th?id=OIP.fbV7ugqdiq1oe6_AZzf1owHaHP&pid=Api&P=0&h=180')
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [intro, setIntro] = useState('')
    // const { id } = useParams();
    useEffect(() => {
        // Mã lệnh được thực thi chỉ một lần khi component được render lần đầu tiên
        console.log('useEffect được gọi chỉ một lần');
        fnGetTeacherDetail()
      }, []);
      const [teacherDetail, setTeacherDetail] = useState({})
      const fnGetTeacherDetail = async ()  =>  {
           await getTeacherDetail(id)
           .then((res) => {
            setTeacherDetail(res.data)
           })
           .catch(() => {
            // 
           })
      }
    const uploadAvatar = () => {
        document.getElementById('avartarInput').click()
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
    const  fnsignTeacher = async () => {
        const teacherInfor = {
            fullName,
            phoneNumber,
            img: courseImg,
            intro
        }
        await signTeacher(teacherInfor)
        .then((res) => {
            console.log(res)
            alert('You signed teacher success')
        })
        .catch(() => {
          alert('Điền sai hoặc thiếu thông tin')
        })
    }
     return (
        <div>
            <Box sx={style}>
            <div onClick={uploadAvatar} >
              <img src={courseImg} style={{width: '250px', height: 'auto'}} />
            </div>
            <div style={{padding: '10px 0px', margin: '10px 0px'}} className="">
            <input onChange={courseImgChange} type="file" id="avartarInput" style={{display: 'none',}} />
            </div>
            <div className="" style={{padding: '10px 0px', margin: '10px 0px'}}>
            <TextField fullWidth  label="name" value={fullName} variant="outlined" onChange={(e) => {setFullName(e.target.value)}} />
            </div>
            <div className="">
            <TextField fullWidth style={{padding: '10px 0px', margin: '10px 0px'}}  label="phone" value={phoneNumber} variant="outlined" onChange={(e) => {setPhoneNumber(e.target.value)}} />
            </div>
            <div className="">
            {/* <TextField fullWidth style={{padding: '10px 0px', margin: '10px 0px'}} label="course cost" value={intro} variant="outlined" onChange={(e) => {setIntro(e.target.value)}} /> */}
            <textarea  style={{padding: '10px 0px', margin: '10px 0px', width: '100%'}} placeholder='intro'  label="intro" value={intro} onChange={(e) => {setIntro(e.target.value)}} />
            </div>
            <div className="">
              <button style={{backgroundColor: '#cccccc', padding: '12px', border:'none', color: 'blue'}} onClick={fnsignTeacher}>sign teacher</button>
            </div>
          </Box>
        </div>
    );
};

export default TeacherInfor;