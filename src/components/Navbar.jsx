import { Stack } from '@mui/material';
import React from 'react';

import logo from '../logo.png'
import { Link } from 'react-router-dom';
import { SearchBar } from './index';


const Navbar = () => (
    <Stack 
        direction="row"
        alignItems="center"
        p={2}
        sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >
        <Link to="/" sx={{ display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt="" height={45} className="site-logo" />
        </Link>

        <SearchBar/>
    </Stack>
)

export default Navbar;