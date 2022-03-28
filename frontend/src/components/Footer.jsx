import React from 'react';
import { Typography } from '@mui/material'

const Footer = () => {



  return (
    <div id="footer">
      <Typography sx={{ width: '90%', textAlign: 'center' }} variant="h3">Front end developed by <a className="footerLink" href="https://olys.tech" target="_blank" rel="noreferrer">Oliver</a> using the <a className="footerLink" href="https://age-of-empires-2-api.herokuapp.com/docs/" target="_blank" rel="noreferrer">Age of Empires 2 API</a></Typography>
    </div>
  )
}

export default Footer