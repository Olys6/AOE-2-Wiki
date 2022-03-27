import React from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'


const CivilizationsCardNoImages = ({ civImageArray, civ, i }) => {



    return (
        <Card variant="outlined" sx={{ maxWidth: 345 }} key={civ.id} id="card">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {civ.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    From the expansion of "{civ.expansion}" with an army type of {civ.army_type}.
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }} >
                <Link to={`/civilization/${civ.id}`} className="link"><Button size="small">Learn More</Button></Link>
            </CardActions>
        </Card>
    )
}

export default CivilizationsCardNoImages