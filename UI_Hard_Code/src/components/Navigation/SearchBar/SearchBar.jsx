import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SearchBar = ({onChange}) => {
  const navigate = useNavigate();
  // const handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     const input = event.target.value;
  //     onSearch(input);
  //   }
  // };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 50,
    backgroundColor: "#F7F9FA",
    marginLeft: 0,
    border: "1px solid #1c1d1f",
    width: "100%",
    height: 48,
    color: "#8A8B8D",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.common.black,
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.5, 1, 1, 1),
      paddingLeft: `calc(1em + ${theme.spacing(5)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      fontSize: 14,
    },
  }));

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Navigate to the desired URL when Enter is pressed
      navigate(`/search`);
    }
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ fontSize: 24 }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search for anything"
        // inputProps={{ "aria-label": "search" }}
        inputProps={{ autoComplete: "off" }}
        onKeyDown={onChange}
        onKeyPress={handleKeyPress}
      />
      
    </Search>
  );
};

export default SearchBar;
