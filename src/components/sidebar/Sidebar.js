import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import Avatar from '@material-ui/core/Avatar';
import MusicIcon from '@material-ui/icons/MusicNoteRounded';
import { FaTrophy } from 'react-icons/fa';
import {FaGamepad} from 'react-icons/fa';
import {CgFilm} from 'react-icons/cg'
import {BiNews} from 'react-icons/bi'
import {GiAerialSignal} from 'react-icons/gi';
import {GiClothes} from 'react-icons/gi';
import {IoBulbOutline} from 'react-icons/io5';
import {IoGlassesSharp} from 'react-icons/io5';
import AddCircleRounded from '@material-ui/icons/AddCircleRounded';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Accueil"/>
            <SidebarRow Icon={WhatshotIcon} title="Tendances"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Abonnements"/>
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Bibliothèque"/>
            <SidebarRow Icon={HistoryIcon} title="Historique"/>
            <hr />
            <div className="sidebar__infoConnect">
               <p>Connectez-vous à Youtube pour cliquer sur "J'aime", ajouter un commentaire et vous abonner.</p>
                <div className="sidebar__connect">
                    <Avatar className="sidebar__avatarConnect" style= {{height:"28px", width:"28px", color: "rgb(84, 157, 211)"}} /> <span className="sidebar__spanConnect">SE CONNECTER</span>
                </div> 
            </div>          
            <hr />
            <h4 style={{marginLeft: "20px"}}>LE MEILLEUR DE YOUTUBE</h4>
            <SidebarRow Icon={MusicIcon} title="Musique"/>
            <SidebarRow Icon={FaTrophy} title="Sport"/> 
            <SidebarRow Icon={FaGamepad} title="Jeux vidéo"/>
            <SidebarRow Icon={CgFilm} title="Films et TV"/>
            <SidebarRow Icon={BiNews} title="Actualités"/>
            <SidebarRow Icon={GiAerialSignal} title="En direct"/>
            <SidebarRow Icon={GiClothes} title="Mode et beauté"/>
            <SidebarRow Icon={IoBulbOutline} title="Savoirs & Cultures"/>
            <SidebarRow Icon={IoGlassesSharp} title="Vidéo à 360°"/>
            <hr />
            <SidebarRow Icon={AddCircleRounded} title="Chaînes"/>
            <hr />
            <div style={{marginLeft: "20px", fontSize:"14px", fontWeight:"bold"}}>
                <p>Présentation Presse</p>
                <p>Droits d'auteur Nous contacter</p>
                <p>Créateurs Publicité</p>
                <p>Développeurs</p>
                <br/>
                <p>Conditions d'utilisation</p>
                <p>Confidentialité</p>
                <p>Règles et sécurité</p>
                <p>Premiers pas sur Youtube</p>
                <p>Tester de nouvelles fonctionnalités</p>
                <br/>
                <p style={{color: "gray", marginBottom:"20px"}}>© 2021 Google LLC</p>
            </div>
            
        </div>
    )
}

export default Sidebar
