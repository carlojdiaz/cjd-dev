import { Typography, Box, Grid } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Box
        component='body'
        sx={{ 
            margin: '0.5rem 0rem', 
            padding: '1rem 3rem' 
          }}
        >
        <Typography variant='h2' align='center'>About Me</Typography>

        <Grid
            container spacing={3}
            alignItems='flex-start'
            justifyContent='space-between'
        >
            <Grid item>
                <Typography variant='body1'>35o34utihejkfgdsg</Typography>
            </Grid>

            <Grid item>
            </Grid>

          
        </Grid>
    </Box>
  )
}

export default About