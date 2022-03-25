import React, { useState, useEffect } from "react";
import axios from "axios";
import { LinearProgress } from '@mui/material';
import CivilizationsCard from './CivilizationsCard'

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

  return (
    <>
      {aoeAPI ?
        <>
          <div div id="cards" >
            {!hasError ?
              <>
                {aoeAPI.map((arrItem, index) => {
                  return (
                    <CivilizationsCard key={arrItem.id} civImageArray={civImageArray} civ={arrItem} i={index}/>
                  )
                })}
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
          <LinearProgress color="inherit" sx={{ color: "rgb(254, 88, 88)", paddingBottom: "0.3rem"}} />
        </>
      }
    </>
  )
}

export default Civilization
