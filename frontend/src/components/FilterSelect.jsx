import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, Box, TextField } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import SailingIcon from '@mui/icons-material/Sailing';
import PetsIcon from '@mui/icons-material/Pets';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import ChurchIcon from '@mui/icons-material/Church';
import BuildIcon from '@mui/icons-material/Build';

const FilterSelect = ({ handleChange, armyTypeSelect, handleSearch }) => {



  return (
    <>
      <div id="SearchAndFilterOutsideDiv">
        <div id="searchAndFilterBar">
          <Box sx={{ display: 'flex', alignItems: 'center', width: "98%", gap: "1rem" }}>
            <FormControl fullWidth>
              <InputLabel sx={{ display: "flex", justifyContent: "space-between" }} color={"secondary"} id="inputLabel">Army Types</InputLabel >
              <Select
                // defaultValue="All Civs"
                value={armyTypeSelect}
                label="Army Types"
                onChange={handleChange}
                color={"secondary"}
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxHeight: "3.5rem" }}
              >
                <MenuItem value={"All Civs"}>All Civilizations</MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} value={"Infantry"}>Infantry <AccessibilityNewIcon /></MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} value={"Archer"}>Archer <ModeStandbyIcon /></MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} value={"Cavalry"}>Cavalry <BedroomBabyIcon /></MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} value={"Camel"}>Camel <Brightness7Icon/></MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} value={"Gunpowder"}>Gunpowder <TouchAppIcon /></MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} value={"Naval"}>Naval <SailingIcon /></MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} value={"Elephant"}>Elephant <PetsIcon /></MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} value={"Siege"}>Siege <BuildIcon /></MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} value={"Monk"}>Monk <ChurchIcon /></MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} value={"Defensive"}>Defensive <AddModeratorIcon /></MenuItem>
              </Select>
            </FormControl>
            <TextField
              color={"secondary"}
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