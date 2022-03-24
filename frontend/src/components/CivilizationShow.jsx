import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { LinearProgress, Card, CardContent, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const CivilizationShow = () => {

  const [civ, setCiv] = useState()
  const [civUniqueUnit, setCivUniqueUnit] = useState()
  const [civUniqueUnit2, setCivUniqueUnit2] = useState()

  const [civUniqueUnitLink, setCivUniqueUnitLink] = useState()
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/v1/civilization/${id}`)
        setCiv(data)
        setCivUniqueUnitLink(data.unique_unit)
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
        const response = getUnitData()
        console.log("RESPONSE", response)
        if (civUniqueUnitLink.length > 1) {
          getUnitData2()
        }
      }
    
  }, [civUniqueUnitLink])

  


  // console.log("DATA FOR SINGLE CIV ->", civ)
  console.log("UNIQUE UNIT ->", civUniqueUnit)

  return (
    <Container id="singleCivContainer">
      {civ ?
        <>
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
                  {civUniqueUnit ?
                    <>
                      <Card className="uniqueUnitCard" >
                        <CardContent>
                          <Typography variant="h5" component="div">
                            Unique Unit:  <span style={{ color: "#00dd07" }}>{civUniqueUnit.name}</span>
                          </Typography>
                          <br />
                          <Typography variant="bod1" component="div">
                            {civUniqueUnit.description}
                          </Typography>
                          <br />
                          <Typography variant="h6" component="div">
                            Unlocked in <span style={{ color: "#00dd07" }}>{civUniqueUnit.age}</span> age.
                          </Typography>
                          <Typography variant="h6" component="div">
                            Created in the <span style={{ color: "#00dd07" }}>
                              {civUniqueUnit.created_in.split("/")[civUniqueUnit.created_in.split("/").length - 1]}
                            </span> with a build time of <span style={{ color: "#00dd07" }}>{civUniqueUnit.build_time}</span> seconds.
                          </Typography>
                          <Typography variant="h6" component="div">
                            <div className="unitCostSection">
                              <p>Cost:</p>
                              <ul id="unitCostList">
                                {Object.entries(civUniqueUnit.cost).map(([key, value], i) => (
                                  <li className="travelcompany-input" key={i}>
                                    <span className="input-label" style={{ color: "#00dd07" }}>{value} {key}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </Typography>
                          <Typography variant="h6" component="div">
                            Attack bonus: 
                              {civUniqueUnit.attack_bonus.map(bonus => (
                                <span className="input-label" style={{ color: "#00dd07" }}> {bonus}, </span>
                              ))}
                          </Typography>
                          <Accordion sx={{ marginTop: "10px" }}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>More Info</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <ul>
                                  <li>Reload Time: <span style={{ color: "#00dd07" }}>{civUniqueUnit.reload_time}s</span></li>
                                  <li>Movement Speed: <span style={{ color: "#00dd07" }}>{civUniqueUnit.movement_rate}</span></li>
                                  <li>Line of Sight: <span style={{ color: "#00dd07" }}>{civUniqueUnit.line_of_sight}</span></li>
                                  <li>Hit Points: <span style={{ color: "#00dd07" }}>{civUniqueUnit.hit_points}</span></li>
                                  <li>Attack: <span style={{ color: "#00dd07" }}>{civUniqueUnit.attack}</span></li>
                                  <li>Armour: <span style={{ color: "#00dd07" }}>{civUniqueUnit.armor}</span></li>
                                </ul>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </CardContent>
                      </Card>
                    </>
                    :
                    <>
                    </>
                  }
                  {civUniqueUnit2 ?
                    <>
                      <Card className="uniqueUnitCard" >
                        <CardContent>
                          <Typography variant="h5" component="div">
                            Unique Unit 2:  <span style={{ color: "#00dd07" }}>{civUniqueUnit2.name}</span>
                          </Typography>
                          <br />
                          <Typography variant="bod1" component="div">
                            {civUniqueUnit2.description}
                          </Typography>
                          <br />
                          <Typography variant="h6" component="div">
                            Unlocked in <span style={{ color: "#00dd07" }}>{civUniqueUnit2.age}</span> age.
                          </Typography>
                          <Typography variant="h6" component="div">
                            Created in the <span style={{ color: "#00dd07" }}>
                              {civUniqueUnit2.created_in.split("/")[civUniqueUnit2.created_in.split("/").length - 1]}
                            </span> with a build time of <span style={{ color: "#00dd07" }}>{civUniqueUnit2.build_time}</span> seconds.
                          </Typography>
                          <Typography variant="h6" component="div">
                            <div className="unitCostSection">
                              <p>Cost:</p>
                              <ul id="unitCostList">
                                {Object.entries(civUniqueUnit2.cost).map(([key, typeOfCost], i) => (
                                  <li className="travelcompany-input" key={i}>
                                    <span className="input-label" style={{ color: "#00dd07" }}>{typeOfCost} {key}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </Typography>
                          <Typography variant="h6" component="div">
                            Attack bonus:
                            {civUniqueUnit2.attack_bonus.map(bonus => (
                              <span className="input-label" style={{ color: "#00dd07" }}> {bonus}, </span>
                            ))}
                          </Typography>
                          <Accordion sx={{ marginTop: "10px" }}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>More Info</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <ul>
                                  <li>Reload Time: <span style={{ color: "#00dd07" }}>{civUniqueUnit2.reload_time}s</span></li>
                                  <li>Movement Speed: <span style={{ color: "#00dd07" }}>{civUniqueUnit2.movement_rate}</span></li>
                                  <li>Line of Sight: <span style={{ color: "#00dd07" }}>{civUniqueUnit2.line_of_sight}</span></li>
                                  <li>Hit Points: <span style={{ color: "#00dd07" }}>{civUniqueUnit2.hit_points}</span></li>
                                  <li>Attack: <span style={{ color: "#00dd07" }}>{civUniqueUnit2.attack}</span></li>
                                  <li>Armour: <span style={{ color: "#00dd07" }}>{civUniqueUnit2.armor}</span></li>
                                </ul>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </CardContent>
                      </Card>
                    </>
                    :
                    <>
                    </>
                  }
                </div>
                <Card id="civBonusCard">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Civilization Bonus:
                    </Typography>
                    {civ.civilization_bonus.map((bonus, i) => (
                      <Typography variant="h6" key={`bonus ${i}`}>
                        Bonus {i + 1}: <span style={{ color: "#00dd07" }}>{bonus}</span>
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </>
            :
            <>
            </>
          }
        </>
        :
        <>
          <LinearProgress color="inherit" sx={{ color: "rgb(254, 88, 88)", paddingBottom: "0.3rem" }} />
        </>
      }
    </Container>
  )
}

export default CivilizationShow