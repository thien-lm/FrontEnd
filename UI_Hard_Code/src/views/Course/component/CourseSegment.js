import React, { useEffect, useState } from 'react';
import { getSegmentList } from '../../../api/course/course';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';



// function createData(
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   ) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
  
const CourseSegment = ({courseId}) => {
    console.log('id coursesegment', courseId)
    const [segmentList, setSegmentList] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        // Mã lệnh được thực thi chỉ một lần khi component được render lần đầu tiên
        fnGetSegmentList()
      }, [courseId]);
      const fnGetSegmentList = async ()  =>  {
           await getSegmentList(courseId)
           .then((res) => {
             console.log('segment list', res)
             setSegmentList(res.data)
           })
           .catch(() => {
            // 
           })
      }
    const handleRowClick = (segmentID, courseID) => {
      const startIndex = segmentID.indexOf("v=") + 2; // Adding 2 to skip "v="
      const endIndex = segmentID.indexOf("&", startIndex); // Find the first occurrence of "&" after "v="
      const videoId = segmentID.substring(startIndex, endIndex);
      navigate(`/learn/course/${courseID}/${videoId}`)
    }
    return (
        <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 650 }} large="small" aria-label="a dense table">
          {/* <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            {segmentList.map((segment) => (
              <TableRow
                key={segment.segmentID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => handleRowClick(segment.content, segment.courseID)}
              >
                <TableCell TableCell component = "th"
                scope = "row"
                sx = {
                  {
                    fontSize: 12,
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }
                } >
                  {segment.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default CourseSegment;