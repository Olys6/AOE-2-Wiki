import React, { useState, useEffect } from "react";
import axios from "axios";
import { LinearProgress } from '@mui/material';
import CivilizationsCard from './CivilizationsCard'
import CivilizationsCardNoImages from './CivilizationsCardNoImages'
import FilterSelect from './FilterSelect'

const civImageArray = [
  "https://i.imgur.com/IOiefGr.jpg", "https://i.imgur.com/bEWgLcR.png", "https://i.imgur.com/d56KpCe.png",
  "https://i.imgur.com/H4wszTv.png", "https://i.imgur.com/2sPvXXP.png", "https://i.imgur.com/EbQFMFe.png",
  "https://i.imgur.com/DIzleeD.png", "https://i.imgur.com/DIzleeD.png", "https://i.imgur.com/f2WtOSQ.png",
  "https://i.imgur.com/QbTqxlu.png", "https://i.imgur.com/xiY2AT6.png", "https://i.imgur.com/c0pYRab.png",
  "https://i.imgur.com/Z7PnHLd.png", "https://i.imgur.com/WYMECZ4.png", "https://i.imgur.com/H2fg05M.jpg",
  "https://i.imgur.com/g4mFeKM.png", "https://i.imgur.com/kRe4hls.png", "https://i.imgur.com/zDYv8kC.jpg",
  "https://i.imgur.com/c1x0pyi.png", "https://i.imgur.com/XOfPcAl.png", "https://i.imgur.com/LxUkEF8.png",
  "https://i.imgur.com/DIzleeD.png", "https://i.imgur.com/ffyCkAY.png", "https://i.imgur.com/eSbWxZ8.jpg",
  "https://i.imgur.com/NzL1RI2.jpg", "https://i.imgur.com/f2WtOSQ.png", "https://i.imgur.com/t0azNfR.png",
  "https://i.imgur.com/tOpLPSB.png", "https://i.imgur.com/4tODDr6.jpg", "https://i.imgur.com/xSgHFCe.png",
  "https://i.imgur.com/qnXPP75.png", "https://i.imgur.com/8SiUWuy.jpg"
]

const Civilization = () => {

  const [aoeAPI, setAoeAPI] = useState()

  const [hasError, setHasError] = useState(false)

  const [armyTypeSelect, setArmyTypeSelect] = useState("All Civs")
  const [showCivImages, setShowCivImages] = useState(true)
  const [search, setSearch] = useState("")
  const [filteredCivs, setFilteredCivs] = useState()

  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/v1/civilizations')
        // console.log(data)
        setAoeAPI(data.civilizations)
      } catch (err) {
        setHasError(true)
        console.log(err)
      }
    }
    getData()
  }, [])

  // console.log("API ->", aoeAPI)

  const handleChange = (event) => {
    if (event.target.value === "All Civs" && search === "") {
      setShowCivImages(true)
    } else {
      setShowCivImages(false)
    }
    setArmyTypeSelect(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.target.value.includes("\\") || event.target.value.includes("(") || event.target.value.includes(")")
      || event.target.value.includes("*") || event.target.value.includes("[") || event.target.value.includes("+")) return;

    if (event.target.value !== "") {
      setShowCivImages(false)
    } else {
      setShowCivImages(true)
    }
    setSearch(event.target.value)
  }

  useEffect(() => {
    if (!aoeAPI) return;

    const regexSearch = new RegExp(search, 'ig')
    setFilteredCivs(aoeAPI.filter(civ => {

      return regexSearch.test(civ.name) && (civ.army_type.toLowerCase().includes(armyTypeSelect.toLowerCase()) || armyTypeSelect === 'All Civs')
    }))
  }, [armyTypeSelect, aoeAPI, search])

  return (
    <div id="page">
      {filteredCivs ?
        <>
          <FilterSelect armyTypeSelect={armyTypeSelect} handleChange={handleChange} handleSearch={handleSearch} />
          <div div id="cards" >
            {!hasError ?
              <>
                {showCivImages
                  ?
                  <>
                    {filteredCivs.map((arrItem, index) => (
                      <CivilizationsCard key={arrItem.id} civImageArray={civImageArray} civ={arrItem} i={index} />
                    ))}
                  </>
                  :
                  <>
                    {filteredCivs.map((arrItem, index) => (
                      <CivilizationsCardNoImages key={arrItem.id} civImageArray={civImageArray} civ={arrItem} i={index} />
                    ))}
                  </>
                }

              </>
              :
              <>
                ERROR
              </>
            }
          </div >
        </>
        :
        <>
          <LinearProgress color="inherit" sx={{ color: "rgb(254, 88, 88)", paddingBottom: "0.3rem" }} />
        </>
      }
    </div>
  )
}

export default Civilization
