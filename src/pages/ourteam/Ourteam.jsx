import React from 'react';
import "./ourteam.css";
import Lottie from "lottie-react";
import business_team from "./business_team.json";
import { LinkContainer } from 'react-router-bootstrap';
import Image from 'react-bootstrap/Image';

const Ourteam = () => {
    return (
        <div className='teampage'>
            <div className='ourteam'>

                <div className="teamcontent">
                    <h2 className='joinourteam'>Join our <span className='bluecolor'>team</span> </h2>
                    <p className='jointeamsub'>
                        If you are inclined to work for a high performance product company that cares for and supports its employees to pursue their career ambitions, we invite you to learn more about us. We provide an environment which fosters open communication and innovation. If you seek newer challenges, newer learnings, you have come to the right place. We encourage initiative takers who have the hunger to try something different without the fear of failure, We empower people to take decisions in their sphere of responsibility. We are on a fast track mode. If you feel you have it in you to be a part of a high growth organization, an agile & vibrant culture, read on and reach out.
                    </p>
                    <LinkContainer to="/contact-us"><button className='joinbutton'>Join Our Team</button></LinkContainer>
                </div>

                <Lottie loop={true} animationData={business_team} className='businessteam' />

            </div>

            <div className="meetourteam">
                <h2 className='meetot'>Meet Our <span className='bluecolor'>Team</span></h2>
                <div className="profiles">
                    <div className='card profilecard'>
                        <Image src='src/pages/ourteam/binoy_profile.jpg' roundedCircle></Image>
                        <div className="name">Binoy Manoj</div>
                        <div className="role">Developer</div>
                    </div>
                    <div className='card profilecard'>
                        <Image src='src/pages/ourteam/binoy_profile.jpg' roundedCircle></Image>
                        <div className="name">Binoy Manoj</div>
                        <div className="card-subtitle">Developer</div>
                    </div>
                    <div className='card profilecard'>
                        <Image src='src/pages/ourteam/binoy_profile.jpg' roundedCircle></Image>
                        <div className="name">Binoy Manoj</div>
                        <div className="role">Developer</div>
                    </div>
                    <div className='card profilecard'>
                        <Image src='src/pages/ourteam/binoy_profile.jpg' roundedCircle></Image>
                        <div className="name">Binoy Manoj</div>
                        <div className="role">Developer</div>
                    </div>
                    <div className='card profilecard'>
                        <Image src='src/pages/ourteam/binoy_profile.jpg' roundedCircle></Image>
                        <div className="name">Binoy Manoj</div>
                        <div className="role">Developer</div>
                    </div>
                    <div className='card profilecard'>
                        <Image src='src/pages/ourteam/binoy_profile.jpg' roundedCircle></Image>
                        <div className="name">Binoy Manoj</div>
                        <div className="role">Developer</div>
                    </div>
                    <div className='card profilecard'>
                        <Image src='src/pages/ourteam/binoy_profile.jpg' roundedCircle></Image>
                        <div className="name">Binoy Manoj</div>
                        <div className="role">Developer</div>
                    </div>
                    <div className='card profilecard'>
                        <Image src='src/pages/ourteam/binoy_profile.jpg' roundedCircle></Image>
                        <div className="name">Binoy Manoj</div>
                        <div className="role">Developer</div>
                    </div>
                    <div className='card profilecard'>
                        <Image src='src/pages/ourteam/binoy_profile.jpg' roundedCircle></Image>
                        <div className="name">Binoy Manoj</div>
                        <div className="role">Developer</div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Ourteam