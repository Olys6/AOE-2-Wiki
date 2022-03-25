import React from 'react'
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CivUniqueUnit1Card = ({ name, description, age, build_time, created_in, cost, attack_bonus, reload_time, movement_rate, line_of_sight, hit_points, attack, armor }) => {

  return (
    <>
      <Card className="uniqueUnitCard" sx={{ maxWidth: "100%" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Unique Unit:  <span style={{ color: "#00dd07" }}>{name}</span>
          </Typography>
          <br />
          <Typography variant="bod1" component="div">
            {description}
          </Typography>
          <br />
          <Typography variant="h6" component="div">
            Unlocked in <span style={{ color: "#00dd07" }}>{age}</span> age.
          </Typography>
          <Typography variant="h6" component="div">
            Created with the <span style={{ color: "#00dd07" }}>
              {created_in.split("/")[created_in.split("/").length - 1]}
            </span> in <span style={{ color: "#00dd07" }}>{build_time}</span> seconds.
          </Typography>
          <Typography variant="h6" component="div">
            <div className="unitCostSection">
              <p>Cost:</p>
              <ul id="unitCostList">
                {Object.entries(cost).map(([key, value], i) => (
                  <li className="travelcompany-input" key={i}>
                    <span className="input-label" style={{ color: "#00dd07" }}>{value} {key}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Typography>
          <Typography variant="h6" component="div">
            Attack bonus:
            {attack_bonus.map((bonus, i) => (
              <span key={i} className="input-label" style={{ color: "#00dd07" }}> {bonus}, </span>
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
              <ul>
                <li key="reload_time1">Reload Time: <span style={{ color: "#00dd07" }}>{reload_time}s</span></li>
                <li key="movement_rate1">Movement Speed: <span style={{ color: "#00dd07" }}>{movement_rate}</span></li>
                <li key="line_of_sight1">Line of Sight: <span style={{ color: "#00dd07" }}>{line_of_sight}</span></li>
                <li key="hit_points1">Hit Points: <span style={{ color: "#00dd07" }}>{hit_points}</span></li>
                <li key="attack1">Attack: <span style={{ color: "#00dd07" }}>{attack}</span></li>
                <li key="armor1">Armour: <span style={{ color: "#00dd07" }}>{armor}</span></li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </>
  )
}

export default CivUniqueUnit1Card