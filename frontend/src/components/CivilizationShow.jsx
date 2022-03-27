import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { LinearProgress, Card, CardContent, Typography, Container } from '@mui/material'
import CivUniqueUnit1Card from './CivUniqueUnitCards/CivUniqueUnit1Card';
import CivUniqueUnit2Card from './CivUniqueUnitCards/CivUniqueUnit2Card';
import CivBonusCard from './CivBonusCard';
import CivUniqueTech1 from './CivUniqueTechs/CivUniqueTech1.jsx';
import CivUniqueTech2 from './CivUniqueTechs/CivUniqueTech2.jsx';

const CivilizationShow = () => {

  const [civ, setCiv] = useState()

  const [civUniqueUnit, setCivUniqueUnit] = useState()
  const [civUniqueUnit2, setCivUniqueUnit2] = useState()

  const [civUniqueTech, setCivUniqueTech] = useState()
  const [civUniqueTech2, setCivUniqueTech2] = useState()

  const [civUniqueUnitLink, setCivUniqueUnitLink] = useState()
  const [civUniqueTechLink, setCivUniqueTechLink] = useState()
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/v1/civilization/${id}`)
        setCiv(data)
        setCivUniqueUnitLink(data.unique_unit)
        setCivUniqueTechLink(data.unique_tech)
      } catch (err) {
        // console.log(err)
        setHasError(true)
      }
    }
    getData()
  }, [id])


  useEffect(() => {
    const getUnitData = async () => {
      try {
        const { data } = await axios.get(civUniqueUnitLink[0])
        setCivUniqueUnit(data)
      } catch (err) {
        // console.log(err)
        setHasError(true)
      }
    }

    const getUnitData2 = async () => {
      try {
        const { data } = await axios.get(civUniqueUnitLink[1])
        setCivUniqueUnit2(data)
      } catch (err) {
        // console.log(err)
        setHasError(true)
      }
    }

    if (civUniqueUnitLink) {
      // const response = getUnitData()
      // console.log("RESPONSE", response)
      if (civUniqueUnitLink.length > 0) {
        getUnitData()
        if (civUniqueUnitLink.length > 1) {
          getUnitData2()
        }
      }
    }

    const getTechData = async () => {
      try {
        const { data } = await axios.get(civUniqueTechLink[0])
        setCivUniqueTech(data)
      } catch (err) {
        // console.log(err)
        setHasError(true)
      }
    }

    const getTechData2 = async () => {
      try {
        const { data } = await axios.get(civUniqueTechLink[1])
        setCivUniqueTech2(data)
      } catch (err) {
        // console.log(err)
        setHasError(true)
      }
    }

    if (civUniqueTechLink) {
      // const response = getUnitData()
      // console.log("RESPONSE", response)
      if (civUniqueTechLink.length > 0) {
        getTechData()
        if (civUniqueTechLink.length > 1) {
          getTechData2()
        }
      }
    }

  }, [civUniqueUnitLink, civUniqueTechLink])




  // console.log("DATA FOR SINGLE CIV ->", civ)
  // console.log("UNIQUE UNIT ->", civUniqueUnit)

  return (
    <>
      {civ ?
        <Container id="singleCivContainer">
          {!hasError ?
            <>
              <Typography variant="h2" color="white" sx={{ backgroundColor: "rgb(254, 88, 88)", display: "inline-block", textAlign: "center", padding: "0px 10px 0px 10px", borderRadius: "5px", marginBottom: "1.5rem" }}>{civ.name}</Typography>
              <div id="FirstThreeTypesSingleCiv">
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Army Type: <span style={{ color: "#00dd07" }}>{civ.army_type}</span>
                    </Typography>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Expansion: <span style={{ color: "#00dd07" }}>{civ.expansion}</span>
                    </Typography>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Team Bonus: <span style={{ color: "#00dd07" }}>{civ.team_bonus}</span>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div id="secondRowOfSingleCiv">
                <div id="uniqueUnitCards">
                  {civUniqueUnit ? <CivUniqueUnit1Card {...civUniqueUnit} /> : <></>}
                  {civUniqueUnit2 ? <CivUniqueUnit2Card {...civUniqueUnit2} /> : <></>}
                </div>
                <CivBonusCard civ={civ} />
                <div id="civUniqueTechCards">
                  {civUniqueTech ? <CivUniqueTech1 {...civUniqueTech} /> : <></>}
                  {civUniqueTech2 ? <CivUniqueTech2 {...civUniqueTech2} /> : <></>}
                </div>
              </div>
            </>
            :
            <Typography variant="h1">ERROR. PLEASE REFRESH THE PAGE</Typography>
          }
        </Container >
        :
        <LinearProgress color="inherit" sx={{ color: "rgb(254, 88, 88)", paddingBottom: "0.3rem" }} />
      }
    </>
  )
}

export default CivilizationShow