import React, { Component } from 'react'
import { Jumbotron, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './styles.scss'
import Countdown from '../countdown/countdown'
import Scrolldown from '../scrolldown/scrolldown'


const popoverBottom = (
    <Popover id="popover-positioned-bottom" style={{ backgroundColor: "rgba(43, 92, 93, 0.5)", border: "2px solid #cadea5", borderRadius: 0 }}>
        If you are willing to sponsor!
    </Popover>
);

class Start extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="Start">
                <Jumbotron>
                    <section className="container-card">
                        <section className="card">
                            <h2 className="card-heading">Announcements</h2>
                            {/* <section className="card-text"> */}
                            <ul>
                                <li>Lorem ipsum dolor sit amet. Random other gibberish.</li>
                                <li>Item</li>
                                <li>Item</li>
                                <li>Item</li>
                            </ul>
                            {/* </section> */}
                        </section>
                        <section className="card">
                            {/*<div style={{margin: "15px", paddingBottom: "10px", fontSize: "18px"}}>DAYS&nbsp; LEFT</div>*/}
                            <h2 className="card-heading">Info</h2>
                            <section className="card-text">September 17th - 22nd, 2018</section>
                            <Countdown className="counter" />
                            <section className="card-text"> Interested in sponsoring or attending? </section>
                            <section>
                            <a className="btn" href="mailto:conference-chair@acm.illinois.edu">
                                <button className="contact">
                                    CONTACT US
                                </button>
                            </a>
                            </section>
                        </section>
                        <section className="card">
                            <h2 className="card-heading">Featured Speaker</h2>
                            <img className="card-featured-speaker" src="assets/img/keynotes/cassidy.jpg" />
                            <h2 className="card-speaker-caption">
                                Cassidy Williams
                            </h2>
                        </section>
                    </section>
                    <Scrolldown />
                </Jumbotron>
            </div>
        )
    }
}

export default Start 