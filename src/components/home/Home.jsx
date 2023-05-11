import React from 'react';
import "./home.css";
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Lottie from "lottie-react";
import business_woman from "/public/business_woman.json";
import buildingapps from "/public/buildingapps.json";
import { Avatar } from '@mui/material';

const Home = () => {
  return (

    <div className='home'>
      <div className='herosec'>
        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
          <div className='d-inline-block text-center herocont'>
            <h3 className='herotext'>
              Start Building <br /> Your Website <br />
              with <span className='bluecolor'> TechBees</span>
            </h3>

            <p className='herosub'>
              We provide you the most of a software developing <br /> firm to get you updated in the latest trend and <br /> in the field of software developing. And the <br /> developing process leads your company's growth.
            </p>

            <div className='herobutton'>
              <Button variant="success" href='/contact-us' className='getstarted'>Get Started <OpenInNewIcon fontSize='small' /></Button>{' '}
            </div>
          </div>
          <img className="MuiBox-root heroimg " alt="home hero" src="/public/home_hero.png"></img>

        </div>
      </div>

      <div className='contentsection '>
        <div className="trustedcompsec">
          <h2 className='text-center'>
            Trusted by leading enterprise retail brands and businesses
          </h2>
        </div>

        <div className='robust'>
          <div className='pch text-center'>
            <h2 className='font-weight-bold text-left d-inline-block'>
              <span className='bluecolor'>Omnichannel </span> enterprise software and retail components <br /> tailored to the needs of your industry
            </h2>
            <h3 className='rsp text-center '>
              Robust Software Platform
            </h3>
          </div>

          <div className='robusticonsec'>
            <div className='healthcare'>
              <img src="/public/undraw_medicine_b-1-ol.svg" alt="healthcare" className='illustration' />
              <h4>Pharma and Healthcare</h4>
              <h5 className='font-weight-light fwl'>
                Pharma Retail Chain Stores, Healthcare Providers with Dispensing Pharmacies, Pharmacy Distribution, D2C Health Tech companies, Pharma Manufacturers with downstream distribution.
              </h5>
            </div>
            <div className='consumer'>
              <img src="/public/undraw_shopping_bags_tdby.svg" alt="consumer goods" className='illustration cons' />
              <h4>Consumer Goods</h4>
              <h5 className='font-weight-light fwl'>
                Fast Moving Consumer goods distributors, Apparel and Fashion Retailer chain stores, consumer products and electronics chain stores, specialty goods, B2B distributors with dealer operations & assisted sales.
              </h5>
            </div>
            <div className='hypermarkets'>
              <img src="/public/undraw_online_shopping_re_k1sv.svg" alt="hypermarkets" className='illustration' />
              <h4>Hypermarkets</h4>
              <h5 className='font-weight-light fwl'>
                Supermarket chain stores, Grocery and FMCG retailers and distributors, Large hypermarkets selling to B2C and B2B customers, Grocery chain stores.
              </h5>
            </div>
          </div>
        </div>

        <div className='saascontent'>
          <div className='saastxt'>
            <h2 className='saashead'>Retail <span className='bluecolor'>SAAS</span> component factory</h2>

            <p>Harmonized retail components for holistic omnichannel transformation and hyper local proximity delivery. Anything Retail with a customization factor of 20% required as no one size fits all. Unlock your Effortless Digital first strategy through our Cloud based E-commerce Solutions.</p>
            <div className='pointsec'>
              <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Product Information Management (PIMS) - Manage Products || Better Discoverability || Intelligent Search || Multi channel Publishing.</p>
              <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Store Connect:- Hyperlocal fulfilment || Store operations || Last Mile.</p>
              <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Multichannel Order Management - Advanced Inventory & Order Routing Engine || Pre Built Integrations || Reconciliation.</p>
              <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />WH/Store Inventory management- Data Model || Aggregator || Intelligence.</p>
              <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Delivery / Payment Partner Management - Decision Tree || Intelligent routing.</p>
            </div>
            <LinkContainer to="/contact-us"><button className='getstartedbtn'>Get Started</button></LinkContainer>
          </div>
          <Lottie loop={true} animationData={business_woman} className='businesswoman' />
        </div>

        <div className="choosecomponentsec">
          <Lottie loop={true} animationData={buildingapps} className='buildingapps' />
          <div className="componentcontent">
            <h2 className='ecomhead'>Choose <span className='bluecolor'>components</span> to compliment or add to your eCommerce management</h2>
            <p>Our suite of products power the need of harmonized omnichannel Retail, Omnichannel Sales and Hyper local delivery. It is designed to make operations smoother for entrepreneurs and enterprises looking to provide a holistic Omnichannel experience to their customers.</p>
          </div>
        </div>

        <div className="testimonial">
          <h3 className='testimonialcontent text-center'>
            Customer Testimonials
          </h3>
          <h2 className='font-weight-bold text-center'>
            What Our<span className='bluecolor'> Happy Users </span>Say
          </h2>
          <div className='testimonialcard'>
            <div className='card'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <div className="cardtitle">James</div>
              <div className="card-subtitle">Infosys</div>
              <div className="cardtext">We are on a fast track mode and are in the process of identifying and nurturing relationships with a network of global and regional strategic partners. The objective is to align</div>
            </div>
            <div className='card'>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <div className="cardtitle">Arthur</div>
              <div className="card-subtitle">Google</div>
              <div className="cardtext">We are on a fast track mode and are in the process of identifying and nurturing relationships with a network of global and regional strategic partners. The objective is to align</div>
            </div>
            <div className='card'>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <div className="cardtitle">Ares</div>
              <div className="card-subtitle">Wipro</div>
              <div className="cardtext">We are on a fast track mode and are in the process of identifying and nurturing relationships with a network of global and regional strategic partners. The objective is to align</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home