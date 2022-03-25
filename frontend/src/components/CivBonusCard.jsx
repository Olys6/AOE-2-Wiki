import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'

const CivBonusCard = ({ civ }) => {

  return(
    <>
      <Card id="civBonusCard">
        <CardContent>
          <Typography variant="h5" component="div">
            Civilization Bonus:
          </Typography>
          {civ.civilization_bonus.map((bonus, i) => (
            <Typography variant="h6" key={`bonus ${i}`}>
              Bonus {i + 1}: <span style={{ color: "#00dd07" }}>{bonus}</span>.
            </Typography>
          ))}
        </CardContent>
      </Card>
    </>
  )
}

export default CivBonusCard