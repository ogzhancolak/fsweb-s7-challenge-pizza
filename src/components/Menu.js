import React from "react";
import { NavLink } from "react-router-dom";
import "../layout/Menu.css"
import Icon1 from "../Assets/adv-aseets/icons/1.svg";
import Icon2 from "../Assets/adv-aseets/icons/2.svg"
import Icon3 from "../Assets/adv-aseets/icons/3.svg"
import Icon4 from "../Assets/adv-aseets/icons/4.svg"
import Icon5 from "../Assets/adv-aseets/icons/5.svg"
import Icon6 from "../Assets/adv-aseets/icons/6.svg"

function Menu() {
    return (
        <div className="side-menu">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <img id="icon" src={Icon1} alt="ıcon" />
                            YENİ! Kore
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img id="icon" src={Icon2} alt="ıcon" />
                            Pizza
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img id="icon" src={Icon3} alt="ıcon" />
                            Burger
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img id="icon" src={Icon4} alt="ıcon" />
                            Kızartmalar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img id="icon" src={Icon5} alt="ıcon" />
                            Fast Food
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img id="icon" src={Icon6} alt="ıcon" />
                            Gazlı İçecekler
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;