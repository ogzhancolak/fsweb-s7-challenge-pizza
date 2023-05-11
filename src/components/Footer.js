import React from "react";
import "../layout/Footer.css"
import Footer1 from "../Assets/adv-aseets/icons/icon-1.png"
import Footer2 from "../Assets/adv-aseets/icons/icon-2.png"
import Footer3 from "../Assets/adv-aseets/icons/icon-3.png"

import instagram1 from "../Assets/adv-aseets/insta/li-0.png"
import instagram2 from "../Assets/adv-aseets/insta/li-1.png"
import instagram3 from "../Assets/adv-aseets/insta/li-2.png"
import instagram4 from "../Assets/adv-aseets/insta/li-3.png"
import instagram5 from "../Assets/adv-aseets/insta/li-4.png"
import instagram6 from "../Assets/adv-aseets/insta/li-5.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


function Footer() {
    return (
        <div id="footer-container">
            <div id="footer-main-container">
                <div id="footer-main-container-one">
                    <div className="footer-contents">
                        <h1> Teknolojik Yemekler </h1>
                        <p><img className="footer-img" src={Footer1}/>341 Londonderry Road, İstanbul Türkiye </p>
                        <p><img className="footer-img" src={Footer2} /> aciktim@teknolojikyemekler.com </p>
                        <p><img className="footer-img" src={Footer3} /> +90 216 123 45 67 </p>
                    </div>

                    <div className="footer-contents">
                        <h2>Sıccacık Menüler</h2>
                        <p>Terminal Pizza</p>
                        <p>5 Kişilik Hackathlon Pizza</p>
                        <p>useEffect Tavuklu Pizza</p>
                        <p>Beyaz Console Frosty</p>
                        <p>Testler Geçti Mutlu Burger</p>
                        <p>Position Absolute Acı Burger</p>
                    </div>

                    <div className='footer-contents'>
                        <h2>Instagram</h2>
                        <div id='footer-contents-instagram'>
                            <img style={{ padding: "5px" }} src={instagram1}></img>
                            <img style={{ padding: "5px" }} src={instagram2}></img>
                            <img style={{ padding: "5px" }} src={instagram3}></img>
                            <img style={{ padding: "5px" }} src={instagram4}></img>
                            <img style={{ padding: "5px" }} src={instagram5}></img>
                            <img style={{ padding: "5px" }} src={instagram6}></img>
                        </div>
                    </div>
                </div>
            </div>
            <hr size="1" color="gray" />
            <div id='footer-main-container-two'>
                <div id='footer-main-container-two-head'>
                    <div id='copyright'>
                        @ 2023 Teknolojik Yemekler.
                    </div>
                    <div>
                        <FontAwesomeIcon className='icons' icon={faTwitter} style={{ color: '#ffffff' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;