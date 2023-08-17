import React from 'react';
import { Tabs, Tab } from '@mui/material';
import "./Navbar.css";
import { useState } from 'react';

function Navbar() {

    const [value, setValue] = useState(0);

    function handleClick(val){
        setValue(val);
    }

    return (
        <div className = "navbar">
            <Tabs
                value = {value}
                onChange = {handleClick}
                textColor="primary"
                indicatorColor="secondary"
            >
                <Tab label="Home" value={0} />
                <Tab label="About" value={1} />
                <Tab label="Contact" value={2} />
            </Tabs>
        </div>
    )
}

export default Navbar