import React from 'react';
import { StyledHeader } from '../styles/headerStyles';

import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <StyledHeader
            animate={{y:0, opacity: 1}}
            initial={{y:-72, opacity: 0}}
            transition={{duration: 1, ease: [.6, .05, -.01, .9] }}
        >
            <img src={logo} alt="galleria logo" />
            <a href="/slideshow" className="start-slideshow">start slideshow</a>
        </StyledHeader>
    )
}

export default Header
