import React from "react";
import { CircularProgress, Box } from "@mui/material";


const CustomLoader=()=>{
    return(
        <Box sx={{ display: 'flex', height:"100vh", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
        <CircularProgress />
      </Box>
    )
}

export default CustomLoader;