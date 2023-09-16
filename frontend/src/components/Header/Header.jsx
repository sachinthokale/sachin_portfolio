import React from 'react'
import { ReactNavbar } from "overlay-navbar"
import { FaUserAlt } from "react-icons/fa"
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    return (
        <ReactNavbar

            navColor1="black"

            navColor2="black"

            logo={logo}
            logoWidth="400px"
            logoHeight="100vh"
            burgerColor="#f95351"
            burgerColorHover="hsl(250, 100%, 75%)"
            nav2justifyContent="space-around"
            nav3justifyContent="space-around"

            link1Text="Home"
            link2Text="About"
            link3Text="Projects"
            link4Text="Contact"
            link1Url="/"
            link2Url="/about"
            link3Url="/projects"
            link4Url="/contact"
            link1ColorHover="white"
            link1Color="#f95351"
            link1Size="1.5rem"
            link1Padding="3vmax"
            profileIcon={true}
            ProfileIconElement={FaUserAlt}
            profileIconColor="#f95351"
            profileIconColorHover="white"

        />
    )
}

export default Header