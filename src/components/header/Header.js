import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import MicRounded from '@material-ui/icons/MicRounded';
import {Box} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CastSharpIcon from '@material-ui/icons/CastSharp';


function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header__left">
                <Box  display={{ xs: 'none', md: 'inline', lg: 'inline' }} flexDirection="row">
                    <MenuIcon />
                </Box>
                <Link to="/">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png" 
                        alt="YouTube Logo 2017.svg" 
                        className="header__logo"
                    /> 
                </Link> 
            </div>
            <div className="header__contain">
                <div className="header__input">
                    <input 
                        onChange={e => setInputSearch(e.target.value)} 
                        value={inputSearch} 
                        type="text" 
                        placeholder="Rechercher"
                    />

                    <Link to={ `/search/${inputSearch}` }>
                        <SearchIcon className="header__inputButton"/> 
                    </Link>

                </div>
                        
                <Box component="div" display={{ xs: 'none', md: 'none', lg: 'block' }}><MicRounded style={{marginLeft:"10px"}}/></Box>
            </div>
            
            
            <div className="header__icons">  
                <Box component="div" display={{ xs: 'none', md: 'none', lg: 'block' }}><AppsIcon className="header__icon"/></Box>
                <Box component="div" display={{ xs: 'none', md: 'none', lg: 'block' }}><MoreVertIcon className="header__icon"/></Box>
                <Box component="div" display={{ xs: 'block', md: 'none', lg: 'none' }}><CastSharpIcon className="header__inputButton__mobile"/> </Box>  
                <Box component="div" display={{ xs: 'block', md: 'none', lg: 'none' }}><NotificationsNoneIcon className="header__inputButton__mobile"/> </Box>  
                <Link to={ `/search/${inputSearch}` }>
                    <Box component="div" display={{ xs: 'block', md: 'none', lg: 'none' }}><SearchIcon className="header__inputButton__mobile" /> </Box>  
                </Link>
                <Avatar 
                    alt="moi"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/1200px-Tom_Cruise_by_Gage_Skidmore_2.jpg"
                />
            </div>
            
        </div>
    )
}

export default Header
