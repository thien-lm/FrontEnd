import { Box } from "@mui/material";
import { useEffect } from "react";



function CourseThumbnail({imageUrl, newWidth}) {
    useEffect(() => {
        console.log('rrr', imageUrl)
    }, [])
    const defaultImage = 
    'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdemofree.sirv.com%2Fnope-not-here.jpg&tbnid=SV4OFBriF8dLbM&vet=12ahUKEwjRoayOi83_AhWoplYBHQwdCiAQMygjegUIARCNAg..i&imgrefurl=https%3A%2F%2Fsirv.com%2Fhelp%2Farticles%2Fcustomized-error-images%2F&docid=fbTzEGobX6m6FM&w=281&h=262&q=%20error%20image&ved=2ahUKEwjRoayOi83_AhWoplYBHQwdCiAQMygjegUIARCNAg';
    const thumbnailsUrl =  imageUrl?
    imageUrl
    : defaultImage
    
    return (
        <Box>
            <img src={thumbnailsUrl} alt = 'Course'  width ={newWidth}   />
        </Box>
    )
}

export default CourseThumbnail;