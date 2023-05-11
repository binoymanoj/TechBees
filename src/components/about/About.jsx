import React from 'react';
import "./about.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { LinkContainer } from 'react-router-bootstrap';

const About = () => {
  return (
    <footer id="about">

      <MDBFooter bgColor='light' className='footer text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom footertop'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-4 footermid'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <img src="/public/TechBees Logo Full- no BG.png" alt="logo" />
                </h6>
                <p className='objective'>
                  To build long-term relationships with our clients and become their trusted technology partner. <br />
                  <b className="ddd">Designing, developing, delivering excellence. </b>
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-1'>
                <h6 className='text-uppercase fw-bold mb-4'>Solutions</h6>
                <p>
                  <LinkContainer to="/hypermarket"><a className='text-reset'>
                    Hypermarkets
                  </a></LinkContainer>
                </p>
                <p>
                  <LinkContainer to="/consumergoods"><a className='text-reset'>
                    Consumer Goods
                  </a></LinkContainer>
                </p>
                <p>
                  <LinkContainer to="/healthcare"><a className='text-reset'>
                    Healthcare & Wellness
                  </a></LinkContainer>
                </p>
                <p>
                  <LinkContainer to="/logistics"><a className='text-reset'>
                    Logistics & Delivery
                  </a></LinkContainer>
                </p>
                <p>
                  <LinkContainer to="/business"><a className='text-reset'>
                    Small & Medium Business
                  </a></LinkContainer>
                </p>
                <p>
                  <LinkContainer to="/enterprise"><a className='text-reset'>
                    Small & Medium Enterprise
                  </a></LinkContainer>
                </p>
                <p>
                  <LinkContainer to="/large-enterprise"><a className='text-reset'>
                    Enterprise
                  </a></LinkContainer>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Why Tech Bees</h6>
                <p>
                  <LinkContainer to="/about-us"><a className='text-reset'>
                    About Us
                  </a></LinkContainer>
                </p>
                <p>
                  <LinkContainer to="/our-story"><a className='text-reset'>
                    Our Story
                  </a></LinkContainer>
                </p>
                <p>
                  <LinkContainer to="/careers"><a className='text-reset'>
                    Careers
                  </a></LinkContainer>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New Housing Board, Krishnagiri, Tamilnadu, India.
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  techbeeshive@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> +91 4343 295 003
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> +91 80153 11592
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4 footerbot'>
          © 2023 Copyright @
          <a className='text-reset fw-bold'>
            TechBees hive Technologies
          </a>
        </div>
      </MDBFooter>

    </footer>
  )
}

export default About