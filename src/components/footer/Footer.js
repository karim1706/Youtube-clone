import React from 'react';
import './Footer.css';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import {Box} from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__item__container">
                <HomeSharpIcon /> 
                <p className="footer__item__text">Accueil</p>
            </div>
            <div className="footer__item__container">
                <ExploreOutlinedIcon />
                <p className="footer__item__text">Explorer</p>
            </div>
            <div className="footer__item__container">
                <AddCircleOutlineOutlinedIcon style={{fontSize:'40px'}}/>
           </div>
           <div className="footer__item__container">
                <SubscriptionsOutlinedIcon />
                <p className="footer__item__text">Abonnements</p>
           </div>
           <div className="footer__item__container">
                <VideoLibraryOutlinedIcon />
                <p className="footer__item__text">Bibliothèque</p>
           </div>
        </div>
    )
}

export default Footer
