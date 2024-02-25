
import React, { useEffect, useState } from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { getCategory } from '../api/category/category';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    colorTextCategory: {
        color: '#000000',
        padding: '0 6px',
        fontSize: '13px',
        '&:hover': {
            // Các thuộc tính CSS áp dụng khi phần tử được hover
            textDecoration: 'underline',
            cursor: 'pointer',
          },
    }
    
}))
const CategoryList = () => {
    useEffect(() => {
        fnGetCategoryList()
      }, []);
    const [category, setCategory] = useState([])
      const fnGetCategoryList = async ()  =>  {
           await getCategory()
           .then((res) => {
             setCategory(res.data)
             console.log('ddd', category)
           })
           .catch(() => {
            // 
           })
      }
      const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "background.paper",
            height: "7.2rem",
            px: "2.4rem",
            boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
          }}
        >
          <Toolbar disableGutters sx={{ my: "auto", gap: 1 }}>
              {category.map((item) => (<a className={classes.colorTextCategory} key={item.categoryId}>{item.categoryName}</a>))}
          </Toolbar>
      </AppBar>
    </Box>
    );
};

export default CategoryList;