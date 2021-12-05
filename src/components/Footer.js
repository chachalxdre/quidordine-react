import React from 'react';
import {NavLink} from "react-router-dom"
import LogoQuidordine from '../images/LogoQuidordine.png'
import LogoFacebook from '../images/LogoFacebook.png'
import LogoTikTok from '../images/LogoTikTok.png'
import LogoInstagram from '../images/LogoInstragram.png'
import LogoYoutube from '../images/LogoYoutube.png'
import "../index.css"

//Displaying a simple footer that we can add at the end of our pages

const Footer = () => {
    return (
        <div className="Footer">

            <div className="FooterLogo">
                <img src={LogoQuidordine} className="LogoImage"></img>
            </div>

            <div className="FooterLinks"> 
                <NavLink exact to="/" className="navActive">CGU</NavLink>
                <NavLink exact to="/" className="navActive">CGV</NavLink>
                <NavLink exact to="/" className="navActive">Cookies</NavLink>
                <NavLink exact to="/" className="navActive">Mentions légales</NavLink>
                <NavLink exact to="/" className="navActive">Politique des données</NavLink>
                <NavLink exact to="/" className="navActive">Recettes</NavLink>
            </div>

            <div className="SocialNetworks">
                <a href="https://www.facebook.com/">
                    <img src={LogoFacebook} alt="oui"></img>
                </a>
                <a href="https://www.tiktok.com/fr/">
                    <img src={LogoTikTok} alt="oui"></img>
                </a>
                <a href="https://www.instagram.com/">
                    <img src={LogoInstagram} alt="oui"></img>
                </a>
                <a href="https://www.youtube.com/">
                    <img src={LogoYoutube} alt="oui"></img>
                </a>
            </div>

            <p className="FooterCopyright">
                Tous droits réservés à Quidordine - 2021
            </p> 
            
        </div>
    );
};

export default Footer;