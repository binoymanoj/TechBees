import React from 'react';
import "./aboutus.css";
import { LinkContainer } from 'react-router-bootstrap';
import Lottie from "lottie-react";
import abtusanimation from "./abtusanimation.json";
import intelligentretail from "./intelligentretail.json"

const Aboutus = () => {
  return (
    <div className='aboutuspage'>

      <div className="aboutus">
        <div className="abttext">
          <h5>About Us</h5>
          <h2 className='techcomp'>Anything, Anywhere, Anytime Retail <span className='bluecolor'>Tech Components</span> </h2>
          <p className='abtussub'>
            If you are inclined to work for a high performance product company that cares for and supports its employees to pursue their career ambitions, we invite you to learn more about us. We provide an environment which fosters open communication and innovation. If you seek newer challenges, newer learnings, you have come to the right place. We encourage initiative takers who have the hunger to try something different without the fear of failure, We empower people to take decisions in their sphere of responsibility. We are on a fast track mode. If you feel you have it in you to be a part of a high growth organization, an agile & vibrant culture, read on and reach out.
          </p>
          <LinkContainer to="/contact-us"><button className='contactusbtn'>Contact Us</button></LinkContainer>
        </div>

        <Lottie loop={true} animationData={abtusanimation} className='businessteam' />
      </div>

      {/* <p className='content'>Our platforms and solutions help businesses bring a seamless customer experience across their offline and online channels. Businesses can leverage a plug & play ROI driven component-based approach that can seamlessly integrate with their existing technology stack to enable improved holistic omnichannel transformation. We serve over brands and businesses in, supermarkets, consumer goods, electronics, pharmacy and wellness and specialty retail.</p> */}

      <div className="cardsec">
        <div className="bussinessagility bpui">
          <img src="/src/pages/whytechbees/aboutus/bussiness-agility-icon.svg" alt="bussiness-agility" className='bpui-icon' />
          <h3>Business Agility</h3>
          <p>We have a culture of proactively adapting and continuously evolving. For us, achieving business agility means an astute business sense and ability to respond to the customer needs quickly and continuously.</p>
        </div>
        <div className="professionalteam bpui">
          <img src="/src/pages/whytechbees/aboutus/professional-team-icon.svg" alt="professional-team" className='bpui-icon' />
          <h3>Professional Team</h3>
          <p>We are dedicated group of experienced &amp; committed professionals who share your passion in making the right decision for your business. Our retail tech components are built with our customer needs in mind and with continual feedback.</p>
        </div>
        <div className="unifiedexperience bpui">
          <img src="/src/pages/whytechbees/aboutus/unified-experience-icon.svg" alt="unified-experience-icon" className='bpui-icon' />
          <h3>Unified Experience</h3>
          <p>We believe in creative a holistic experience. We recognize that our ability to enable brands and businesses through advisory and technology will play a vital role in helping them become a smart digital-first business.</p>
        </div>
        <div className="intelligentcomponent bpui">
          <img src="/src/pages/whytechbees/aboutus/intelligent-component-icon.svg" alt="intelligent-component-icon" className='bpui-icon' />
          <h3>Intelligent Components</h3>
          <p>Our retail tech components are intelligent. You can manage, aggregate, derive insights, optimally utilize your idle resources or derive more out of your rolling stock, collate options &amp; make decisions in real-time.</p>
        </div>
      </div>

      <div className="differentiatesec">
        <div className="stores soip">
          <img src="/src/pages/whytechbees/aboutus/stores-icon.svg" alt="stores" className='soip-icon' />
          <p>1400 stores using our platform to manage their internal operations</p>
        </div>
        <div className="orders soip">
          <img src="/src/pages/whytechbees/aboutus/order-icon.svg" alt="order" className='soip-icon' />
          <p>Cumulative 8000+ orders on daily basis on the platform and growing</p>
        </div>
        <div className="integrations soip">
          <img src="/src/pages/whytechbees/aboutus/integrations-icon.svg" alt="integrations" className='soip-icon' />
          <p>50+ third party integrations across domains</p>
        </div>
        <div className="platform soip">
          <img src="/src/pages/whytechbees/aboutus/one-platform-icon.svg" alt="one-platform" className='soip-icon' />
          <p>One Platform - Many use cases, different industries</p>
        </div>
      </div>

      <div className="missionsec">
        <div className="missiontxt">
          <h5>Our Mission</h5>
          <h2 className='intelligenttxt'>Make Intelligent Retail Tech <span className='bluecolor'>democratic & accessible </span>to all irrespective of size.</h2>
          <p>The sole purpose of any business is to create value which is a result of making right decisions at the right time. This means it needs to spend more time and resources to focus on getting its basics right. At Invenzo, our mission is to enable businesses to do exactly that.<br /><br />

            We envisage a future where businesses would be able to do what they do best. Our platform and components make access to technology democratic, adoption simple, product usability easier to leapfrog businesses to grow and scale. We envisage a future where businesses will be plugged into two market places simultaneously, one self-created by our suite of platform components and the other to that of Aggregators.</p>
        </div>

        <Lottie loop={true} animationData={intelligentretail} className='intelligentanimation' />

      </div>

    </div>
  )
}

export default Aboutus