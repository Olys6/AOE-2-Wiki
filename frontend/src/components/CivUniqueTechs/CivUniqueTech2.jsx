import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'

const CivUniqueTech2 = ({ name, description, age, develops_in, cost, build_time, applies_to }) => {



    return (
        <>
            <Card className="uniqueUnitCard" sx={{ maxWidth: "100%" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Unique Tech 2:  <span style={{ color: "#00dd07" }}>{name}</span>
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
                        Develops in the <span style={{ color: "#00dd07" }}>{develops_in.split("/")[develops_in.split("/").length - 1]}</span> for <span style={{ color: "#00dd07" }}>{build_time}</span> seconds.
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
                </CardContent>
            </Card>
        </>
    )
}

export default CivUniqueTech2