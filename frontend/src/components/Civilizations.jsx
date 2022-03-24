import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom'

const civImageArray = [
  "https://i.imgur.com/IOiefGr.jpg", "https://i.imgur.com/bEWgLcR.png", "https://i.imgur.com/d56KpCe.png", 
  "https://i.imgur.com/H4wszTv.png", "https://i.imgur.com/2sPvXXP.png", "https://i.imgur.com/EbQFMFe.png",
  "https://i.imgur.com/DIzleeD.png", "https://i.imgur.com/DIzleeD.png", "https://i.imgur.com/f2WtOSQ.png",
  "https://i.imgur.com/QbTqxlu.png", "https://i.imgur.com/xiY2AT6.png", "https://i.imgur.com/c0pYRab.png",
  "https://i.imgur.com/Z7PnHLd.png", "https://i.imgur.com/WYMECZ4.png", "https://i.imgur.com/H2fg05M.jpg",
  "https://i.imgur.com/g4mFeKM.png", "https://i.imgur.com/kRe4hls.png", "https://i.imgur.com/zDYv8kC.jpg",
  "https://i.imgur.com/c1x0pyi.png", "https://i.imgur.com/XOfPcAl.png", "https://i.imgur.com/LxUkEF8.png",
  ""
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
                {aoeAPI.map((arrItem, i) => {
                  return (
                    <Card variant="outlined" sx={{ maxWidth: 345 }} key={arrItem.id} className="card">
                      <CardMedia
                        component="img"
                        height="140"
                        image={civImageArray[i]}
                        alt="civ image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {arrItem.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          From the expansion of "{arrItem.expansion}" with an army type of {arrItem.army_type}.
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center" }} >
                        <Link to={`/civilization/${arrItem.id}`} className="link"><Button size="small">Learn More</Button></Link>
                      </CardActions>
                    </Card>
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
          {/* <Typography variant="h1" sx={{ color: "white", textAlign: "center" }}>LOADING...</Typography> */}
          <LinearProgress color="inherit" sx={{ color: "rgb(254, 88, 88)", paddingBottom: "0.3rem"}} />
        </>
      }
    </>
  )
}

export default Civilization
