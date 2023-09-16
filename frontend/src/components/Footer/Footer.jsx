import React from 'react'
import "./Footer.css"
import { Typography } from '@mui/material'
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-contact-us">
                <Typography variant='h5'>About Me</Typography>
                <Typography >Hey, my name is Sachin Thokale. I am a MERN-Stack Developer
                    and UI/UX Developer...
                </Typography>
                <Link to="/contact" className='footer-contact-btn'>
                    <Typography variant='h9'>Contact Us</Typography>
                </Link>
            </div>
            <div className="social-media">
                <Typography variant='h6'>Social Media</Typography>
                <a href="">
                    <GitHubIcon />
                </a>
                <a href="https://www.instagram.com/" target='blank'>
                    <InstagramIcon />
                </a>
                <a href="">
                    <LinkedInIcon />
                </a>
            </div>

        </div>
    )
}

export default Footer