import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getDocList } from '../../../api/course/course';


const DocCourse = ({courseId}) => {
    const [docList, setDocList] = useState([])
    useEffect(() => {
        console.log('useEffect được gọi chỉ một lần');
        fnGetDoc()
      }, [courseId]);
      const fnGetDoc = async ()  =>  {
           await getDocList(courseId)
           .then((res) => {
             console.log('segment list', res)
             setDocList(res.data)
           })
           .catch(() => {
            // 
           })
      }
    return (
        <div>
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
            {docList.map((doc, index) => (
              <TableRow
                key={doc.documentID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               
              >
                <TableCell component="th" scope="row" sx={{ fontSize: 12 }}>
                 <a href={doc.cntDocument}>Tài liệu tham khảo {index +1}</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    );
};

export default DocCourse;