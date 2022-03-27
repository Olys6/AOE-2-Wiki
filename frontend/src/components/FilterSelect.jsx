import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, Box, TextField } from '@mui/material';



const FilterSelect = ({ handleChange, armyTypeSelect, handleSearch }) => {



  return (
    <>
      <div id="SearchAndFilterOutsideDiv">
        <div id="searchAndFilterBar">
          <Box if="searchAndFilterBar2" sx={{ display: 'flex', alignItems: 'center', width: "98%", gap: "1rem" }}>
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
            <TextField
              onChange={handleSearch}
              helperText=""
              id="demo-helper-text-aligned-no-helper"
              label="Search"
            />
          </Box>
        </div>
      </div>
    </>
  )
}

export default FilterSelect