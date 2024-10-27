import { memo } from "react";
import "./index.css";



const Header = () =>
{
    return (
        <header>
            <div className="nav">
                <img
                    className="logo"
                    src="/Container/assets/img/logo.svg"
                    alt="IBO Umbrel"
                />
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li className="menu">
                        <a href="#">
                            <div className="bar"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};



export default memo(Header);