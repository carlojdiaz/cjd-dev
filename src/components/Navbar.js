import React from 'react';
import { Tabs, Tab, Grid, Typography, Box } from '@mui/material';
import { useState } from 'react';
import "@fontsource/outfit";

function Navbar() {

    const [value, setValue] = useState(0);

    const handleClick = (event, val) => {
        setValue(val);
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', margin: '2rem 7rem'}}>

            <Grid 
                container spacing={2} 
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
    )
}

export default Navbar