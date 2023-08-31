import {SocialIcon} from 'react-social-icons'
import { Typography, Box, Grid, Paper } from '@mui/material'

function Contact() {
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
            >Contact
            <Typography variant='subtitle1'>(and more information)</Typography>
        </Typography>

        <Box
          display='flex'
          justifyContent='center'
          >
            <Paper
            elevation={1}
            sx={{
              padding: '1.5rem',
              width: 300
            }}
            >

                <Typography 
                    variant='body1' 
                    align='center' 
                    sx={{ 
                      padding: '0rem 0rem 1rem 0rem' 
                    }}
                    >Professional</Typography>
                <Typography align='center' variant='body2'>
                    Email: carlodiaz139@gmail.com<br/>
                    LinkedIn: linkedin.com/in/carlo-j-diaz<br/>
                    GitHub: github.com/carlojdiaz
                </Typography>
            </Paper>
        </Box>

        <Box
          display='flex'
          justifyContent='center'
          sx={{
            padding: '3rem 0rem 0rem 0rem'
          }}
          >
            <Paper
                elevation={1}
                sx={{
                  padding: '1rem',
                  width: 200
                }}
                >
                <Typography 
                    variant='body1' 
                    align='center' 
                    sx={{ 
                      padding: '0rem 0rem 1rem 0rem' 
                    }}
                    >Socials</Typography>

                <Grid container
                  justifyContent='space-around'
                  spacing={1}>
                    <Grid item><SocialIcon url="https://github.com/carlojdiaz" target="_blank" bgColor='#121212' style={{ height: 32, width: 32 }} /></Grid>
                    <Grid item><SocialIcon url="https://www.instagram.com/_ceejaydee/" target="_blank" bgColor='#121212' style={{ height: 32, width: 32 }}/></Grid>
                    <Grid item><SocialIcon url="https://www.facebook.com/carlo.j.diaz/" target="_blank" bgColor='#121212' style={{ height: 32, width: 32 }}/></Grid>
                    <Grid item><SocialIcon url="https://www.twitch.tv/ceejaydeee" target="_blank" bgColor='#121212' style={{ height: 32, width: 32 }}/></Grid>
                </Grid>
            </Paper>
        </Box>

    </Box>
  )
}

export default Contact