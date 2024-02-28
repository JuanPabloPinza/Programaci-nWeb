import React from 'react';
import './styles/index-style.css';

function Footer() {
    return (
        <footer>
            <section className="redes-sociales">
                <a href="https://www.facebook.com/ESPE.U" target="_blank">
                    <img className="imgIconosFooter" src="../images/facebook-icon.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com/i/trends" target="_blank">
                    <img className="imgIconosFooter" src="../images/twitter-icon.png" alt="Twitter" />
                </a>
                <a href="https://github.com/JuanPabloPinza/ProgramacionWeb" target="_blank">
                    <img className="imgIconosFooter" src="../images/github-icon.png" alt="Github" />
                </a>
            </section>
            <p style={{ color: 'rgb(184, 173, 210)' }}>&copy; 2024 Juan Pablo Pinza & Alex Trejo</p>
        </footer>
    );
}

export default Footer;
