import React, { useState } from 'react'
import gcettb from "../../src/Images/gcettb.png";
import gcettblogo from "../../src/Images/gcettblogo.png"
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [shownavbar, setShowNavbar] = useState(false)
    const [menuwh, setMenuwh] = useState(false)
    const [stickyheader, setStickyheader] = useState(false);
    function setFixed() {
        if (window.scrollY > 100) {
            setStickyheader(true);
        } else {
            setStickyheader(false);
        }
    }
    window.addEventListener("scroll", setFixed);

    const handleShowNavbar = () => {
        setShowNavbar(!shownavbar)
    }
    const handleClick = () => {
        setMenuwh(!menuwh)
    }


    return (
        <div>
            <section className='top_header'>
                <div className='cust_container'>
                    <div className='topheaderimgtxtflx'>
                       <div className='gvrntttxtw'>
                            <div className='logotxthd'>
                                <div className='gcetbimglogogvrnt'>
                                    <img src={gcettb} alt="..." />
                                </div>
                                <div className='gcetbimglogo'>
                                    <img src={gcettblogo} alt="..." />
                                </div>

                                <div className='clgtxtyr'>
                                    <h4 className='gvrnttxtpp'>
                                        Goverment College of engineering  & textile technology, Berhampore
                                        <span className='cctbtxt'>  Formly Known as Cttb  </span>

                                    </h4>
                                    <p className='txtwstpp'>
                                        Govt. of westbengal | ESTD. 1927
                                    </p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
                <div className={stickyheader ? "main_header fixed" : "main_header"}>
                <div className='cust_container'>
                    <div className='logo_menu_main'>

                        <div className="lghdiv">

                            <Link to="/" className="logo_hd_mn">
                                <img src={gcettblogo} alt="..." />

                            </Link>
                            <Link to="/" className='gctbtxt'>GCETTB</Link>
                        </div>

                        <div className={`nav-elements ${shownavbar && "active"}`}>
                            <div className="nvbsrscl" onClick={handleShowNavbar}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                            <ul>
                                <li>
                                    <NavLink to="/" onClick={handleShowNavbar}>
                                        ALUMUNI LOGIN
                                    </NavLink>
                                </li>
                                <li>
                                    <div className="mnu_icn" onClick={handleClick}>
                                        <NavLink >
                                            REUNION
                                            {menuwh ? (
                                                <i className="fas fa-caret-up"></i>
                                            ) : (
                                                <i className="fas fa-caret-down"></i>
                                            )}
                                        </NavLink>
                                        {menuwh && (
                                            <ul className="sub_menu">
                                                <li>
                                                    <NavLink to="/citizenship" onClick={handleShowNavbar}>
                                                        MEGA REUNION-2018
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/permanentresidence"
                                                        onClick={handleShowNavbar}
                                                    >
                                                        REUNION-2011
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/expressentry"
                                                        onClick={handleShowNavbar}
                                                    >
                                                        REUNION-2008
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/lmia" onClick={handleShowNavbar}>
                                                        REUNION-2024
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                </li>
                                <li>
                                    <NavLink to="/blog" onClick={handleShowNavbar}>
                                        {" "}
                                        ALUMUNI MEETS
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" onClick={handleShowNavbar}>
                                        {" "}
                                        FEEDBACK
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="nvbsr" onClick={handleShowNavbar}>
                            <i className="fa-solid fa-bars-staggered"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
