import { Typography, Box, Grid } from '@mui/material'
import Image from 'mui-image'
import selfportrait from './assets/selfportrait.png'
import React from 'react'

function About() {
  return (
    <Box
        component='body'
        sx={{ 
            margin: '0.5rem 0rem', 
            padding: '1rem 2rem' 
          }}
        >
        <Typography 
            variant='h2' 
            align='center' 
            sx={{ 
              padding: '0rem 0rem 2rem 0rem' 
            }}
            >About Me</Typography>

        <Grid
            wrap='nowrap'
            container spacing={5}
            alignItems='flex-start'
            justifyContent='space-between'
        >
            <Grid item>
                <Typography variant='body1'>
                    Carlo recently graduated from Old Dominion University, receiving his Bachelor's of Science in Computer Science He is an aspiring software engineer, with an internship experience in the field with Amazon.<br/><br/>
                    
                    Outside his professional life, his hobbies include video games, watching anime, playing piano, exercising, playing sports, spending time with friends and his large family, and travelling (when his personal finances permit).<br/><br/>

                    Striving on past experiences and new discoveries, Carlo maintains his diligence to continuously learn something new about himself, the people around him, and the world he lives in.
                </Typography>
            </Grid>

            <Grid item>
              <Image src={selfportrait} width='100%' duration={1500}/>
            </Grid>

        </Grid>
    </Box>
  )
}

export default About