import React from 'react';
import { Tabs, Tab, Grid, Typography, Box } from '@mui/material';
import { useState } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import "@fontsource/outfit";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 1 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function Navbar() {

    const [value, setValue] = useState(0);

    const handleClick = (event, val) => {
        setValue(val);
    }

    return (
        <>
            <Box 
                sx={{ 
                    borderBottom: 1, 
                    borderColor: 'divider'
                }}
            >

                <Grid 
                    container spacing={25} 
                    alignItems="flex-end" 
                    justifyContent={"space-around"}
                >
                    <Grid item>
                        <Typography variant='h1' paddingBottom={"0.5rem"}>Carlo J Diaz</Typography>
                    </Grid>

                    <Grid item>
                        <Tabs
                            value = {value}
                            onChange = {handleClick}
                            textColor="primary"
                        >
                            <Tab label="Home" value={0} />
                            <Tab label="About" value={1} />
                            <Tab label="Contact" value={2} />

                        </Tabs>

                    </Grid>
                    
                </Grid>
            </Box>

            <TabPanel value={value} index={0}>
                <Home />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <About />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Contact />
            </TabPanel>

        </>
    )
}

export default Navbar