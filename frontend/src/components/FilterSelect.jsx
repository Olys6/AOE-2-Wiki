import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const FilterSelect = ({ handleChange, armyTypeSelect, handleSearch }) => {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <>
      <div id="SearchAndFilterOutsideDiv">
        <div id="searchAndFilterBar">
          <Box if="searchAndFilterBar2" sx={{ display: 'flex', alignItems: 'center', width: "80%"}}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "white" }} id="demo-simple-select-label">Army Types</InputLabel >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // defaultValue="All Civs"
                value={armyTypeSelect}
                label="Army Types"
                onChange={handleChange}
                sx={{ color: "white" }}
              >
                <MenuItem value={"All Civs"}>All army</MenuItem>
                <MenuItem value={"Infantry and Monk"}>Infantry and Monk</MenuItem>
                <MenuItem value={"Foot Archer"}>Foot Archer</MenuItem>
                <MenuItem value={"Defensive"}>Defensive</MenuItem>
                <MenuItem value={"Infantry"}>Infantry</MenuItem>
                <MenuItem value={"Archer"}>Archer</MenuItem>
                <MenuItem value={"Cavalry"}>Cavalry</MenuItem>
                <MenuItem value={"Tower and naval"}>Tower and naval</MenuItem>
                <MenuItem value={"Cavalry Archer"}>Cavalry Archer</MenuItem>
                <MenuItem value={"Camel and naval"}>Camel and naval</MenuItem>
                <MenuItem value={"Gunpowder and Monk"}>Gunpowder and Monk</MenuItem>
                <MenuItem value={"Gunpowder"}>Gunpowder</MenuItem>
                <MenuItem value={"Infantry and naval"}>Infantry and naval</MenuItem>
                <MenuItem value={"Calvary and Naval"}>Calvary and Naval</MenuItem>
                <MenuItem value={"Monk and Elephant"}>Monk and Elephant</MenuItem>
                <MenuItem value={"Gunpowder and Cavalry"}>Gunpowder and Cavalry</MenuItem>
                <MenuItem value={"Siege and Elephant Civilzation"}>Siege and Elephant Civilzation</MenuItem>
                <MenuItem value={"Naval and Gunpowder"}>Naval and Gunpowder</MenuItem>
              </Select>
            </FormControl>
            <Search sx={{ color: "white" }} >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
              />
            </Search>
          </Box>
        </div>
      </div>
    </>
  )
}

export default FilterSelect