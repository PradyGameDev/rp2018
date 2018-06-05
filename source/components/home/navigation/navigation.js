import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import styles from './styles.scss'


class Navigation extends Component {
    
    constructor() {
        super();
    }
    
    componentDidMount() {
        if (window.innerWidth > 720) {
            const script = document.createElement("script");
            script.innerText = `
            var menuShiftScrollHeight = 15;
            var pageRpLogo = document.getElementById("pageRpLogo");
            var rpLogo = document.getElementById("rpLogo");
            var rpText = document.getElementById("rpText");
            pageRpLogo.parentElement.style.display = "none";
            window.onscroll = function() {
                if(window.scrollY > menuShiftScrollHeight) {
                    rpText.parentElement.style.display = "none";
                    rpLogo.parentElement.style.display = "none";
                    pageRpLogo.parentElement.style.display = "block";
                }
                if(window.scrollY < menuShiftScrollHeight) {
                    rpText.parentElement.style.display = "list-item";
                    rpLogo.parentElement.style.display = "list-item";
                    pageRpLogo.parentElement.style.display = "none";
                }
            }
        `;
            script.async = true;
            document.body.appendChild(script);
        }
        else if (window.innerWidth < 720) {
            const rpLogo = document.getElementById("rpLogo");
            const rpText = document.getElementById("rpText");
            rpText.parentElement.style.display = "none";
            rpLogo.parentElement.style.display = "none";
        }
    }

    render() {
        this.scrollTo = (name) => {
            const element = document.getElementById(name);
            var yPosition = element.offsetTop;
            window.scrollTo({
                top: yPosition,
                behavior: "smooth"
            });
        };

        return (
            <div className="Navigation">
                <Navbar collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#" style={{ opacity: 1 }}>
                                <img className="Navigation__logo" id="pageRpLogo" src="../assets/svg/logo.svg" />
                                {/* <img className="header" src="../assets/svg/home_header.svg" /> */}
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <div>
                            <NavItem onClick={() => this.scrollTo('#')} eventKey={7} className="Navigation__item--active" id="rpLogo">
                                <img src="../assets/svg/logo.svg" />
                            </NavItem>
                        </div>
                        <div>
                            <NavItem onClick={() => this.scrollTo('#')} eventKey={8} className="Navigation__item--active" id="rpText">
                                <img src="../assets/svg/home_header.svg" />
                            </NavItem>
                        </div>
                        <Nav pullRight>
                            <NavItem onClick={() => this.scrollTo('About')} eventKey={1} className="Navigation__item--active">About</NavItem>
                            <NavItem onClick={() => this.scrollTo('Speakers')} eventKey={2} >Past Speakers</NavItem>
                            <NavItem onClick={() => this.scrollTo('Sponsors')} eventKey={3} >Past Sponsors</NavItem>
                            <NavItem onClick={() => this.scrollTo('Footer')} eventKey={4} >Contact Us</NavItem>
                            <NavItem onClick={() => location.href = "https://blog.reflectionsprojections.org"} eventKey={5}>Blog</NavItem>
                            <NavItem onClick={() => location.href = "/#/faq"} eventKey={6}>FAQ</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
