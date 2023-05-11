import React from 'react';
import "./hypermarket.css";
import { LinkContainer } from 'react-router-bootstrap';
import Lottie from "lottie-react";
import hypermarketanimation1 from "./hypermarketanimation1.json";
import projectanimation from "./projectanimation.json";
import connectinganimation from "./connectinganimation.json";

const Hypermarket = () => {
    return (
        <div className='hypermarketpage'>

            <div className="salesec">
                <div className="saletxt">
                    <h2 className='salehead'>Maximize Sales with Intelligent Hypermarket <span className='bluecolor'>Omnichannel</span> Software product</h2>
                    <p className='abtussub'>
                        Makes sure your consumers gets their product on-demand with seamless and hassle free ordering experience across all channels. Bring harmony between your offline &amp; online commerce thus leading to better repurchase rates. Improve ROI (by 10-15%) of stores, Increase serviceability for orders, Increase conversion in sales through personalized product assortment rendering, and bring stickiness with your customers.
                    </p>
                    <LinkContainer to="/contact-us"><button className='schedulebtn'>Schedule a demo</button></LinkContainer>
                </div>

                <Lottie loop={true} animationData={hypermarketanimation1} className='hypermarketanim' />
            </div>

            <div className="growsec">
                <div className="growbusiness">
                    <h2 className="growbusinesstxt"><span className='bluecolor'>Grow your business</span> like never before. We're here to help.</h2>
                    <h4 className="sellsub">Sell <span className="bluecolor">Smarter!</span> Save <span className="bluecolor">Better.</span></h4>
                </div>
                <div className="cicsection">
                    <div className="customerdelight cic">
                        <img src="/src/pages/solutions/hypermarket/customer_delight_icon.svg" alt="customer-delight" classname="cic-icon" />
                        <h3>Cutomer Delight</h3>
                        <p>Provide on-demand, omnichannel experience and hyperlocal fulfilment to your consumers with our Intelligent Hypermarket solution</p>
                    </div>
                    <div className="insightsanalytics cic">
                        <img src="/src/pages/solutions/hypermarket/analytics_icon.svg" alt="customer-delight" classname="cic-icon" />
                        <h3>Insights & analytics</h3>
                        <p>Make use of intuitive dashboards which captures data of orders/sales, touch points/consumers across all channels. Get actionable insights and reports.</p>
                    </div>
                    <div className="customerengagement cic">
                        <img src="/src/pages/solutions/hypermarket/customer_icon3.svg" alt="customer-delight" classname="cic-icon" />
                        <h3>Customer Engagement</h3>
                        <p>Engage consumers with relevant, personalised &amp; standardised product data across all the right channels with intelligent insights/attribute capturing</p>
                    </div>
                </div>
            </div>

            <div className="intelligentsec">
                <div className="inteltxtsec">
                    <h2 className="intelligenttxt">Intelligent <span className="bluecolor">PIMS and OMS</span></h2>
                    <div className='pointsec'>
                        <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Manage your product catalogues /SKUs centrally with a capability of multi-channel publishing. Product information is stored in a standardised and containerised manner for effective display of information to the front-end channels.</p>
                        <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Plan your master creation as per the categories/variants/tags, Include Attributes. Manage Syndication of Images as per the need for each product als variant wise different image for same.</p>
                        <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Create Product with multiple variants. Create Product sets. Create Price/Discount master. Manage Product Inventory. Enrichment of product attributes.</p>
                        <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Increase discoverability if your products through intelligent tag dictionary, elastic search capability ultimately leading to higher conversions.</p>
                        <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Intelligent/Intuitive one-stop order management where all the orders irrespective of which channel can be shown in a centralised manner. Process orders through various state machines.</p>
                    </div>
                    <LinkContainer to="/contact-us"><button className='schedulebtn'>Get Started</button></LinkContainer>
                </div>

                <Lottie loop={true} animationData={projectanimation} className='projectanimation' />
            </div>

            <div className="connectingdotsec">

                <Lottie loop={true} animationData={connectinganimation} className='connectinganimation' />
                <div className="connectingtxtsec">
                    <h2 className='connectinghead'>Connecting the <span className="bluecolor">Dots</span></h2>
                    <div className="pointsec">
                        <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Provide on-demand, omnichannel and hyperlocal fulfilment to your consumers.</p>
                        <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Integrate inventory, stores, warehouses, and orders (ERP), with consumer and delivery touchpoints with an end-to-end e-commerce platform.</p>
                        <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Convert stores to virtual fulfilment centres or dark stores through Store Connect App.</p>
                        <p><img src="/src/pages/solutions/hypermarket/tick.svg" alt="" className='tickicon' />Enable faster fulfilment and returns with intelligent and automated order management system with dedicated product picking/delivery apps for delivery/store executives.</p>
                    </div>
                    <LinkContainer to="/contact-us"><button className='schedulebtn'>Get Started</button></LinkContainer>
                </div>
            </div>

            <div className="suitesec">
                <h4><span className='bluecolor'>The Techbees Way</span></h4>
                <h2 className='suitehead'>Our platform <span className="bluecolor">suite of components</span> and solutions</h2>
                <p className='suitep'>Our suite of products power the need of harmonized Retail, Omnichannel Sales and Hyper local delivery. It is designed to make operation smoother for entrepreneurs and enterprises looking to provide a holistic Omnichannel experience to their customers.</p>
            </div>

            <div className="compfactorysec">
                <h2 className='text-center'>Hypermarket Retail Component Factory</h2>
                <div className="compiconcards">
                    <div className="card compcard">
                        <img src="/src/pages/solutions/hypermarket/" alt="" className='compicons' />
                        <h6>Product Information Management System (PIMS)</h6>
                        <p>PIMS is envisaged as a centralized platform to manage all product data and information required to enable, automate, and enforce best practices in data, content management and flow across multiple sources, applications and enterprises like aggregators & drop-shipment or franchise partners.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hypermarket