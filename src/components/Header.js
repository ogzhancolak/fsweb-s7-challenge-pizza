import React from "react";
import "../layout/Header.css"
import { Link, animateScroll as scroll } from "react-scroll"

const scrollMiddle = () => {
    scroll.scrollTo(900, { duration: 1000, delay: 100, smooth: "easeInOutQuart" })
}

function Header() {
    return (
        <div id="header-page">
            <div id="menu">
                <div id="menu-text">
                    <h1 className="menu-title" > Teknolojik Yemekler </h1>
                    <h3 className="menu-subtitle" > Fırsatı Kaçırma </h3>
                    <h2 id="menu-taglines-one" > KOD ACIKTIRIR </h2>
                    <h2 id="menu-taglines-two" > PİZZA, DOYURUR </h2>
                    <Link activeClass="active" to="middle" spy={true} smooth={true} duration={1500}>
                        <button className="menu-button" onClick={scrollMiddle} >AÇIKTIM</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;