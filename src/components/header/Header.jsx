import React from 'react';
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PersonIcon from '@mui/icons-material/Person';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import BusinessIcon from '@mui/icons-material/Business';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TimelineIcon from '@mui/icons-material/Timeline';
import WorkIcon from '@mui/icons-material/Work';
import Sticky from 'react-stickynode';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (

    <Sticky enabled={true} >
      <header>
        <div className="container">

          <Navbar id="home" bg="" expand="lg" className=''>
            <Container>
              <Navbar.Brand href="/"><img src="/TechBees Logo Full- no BG.png"></img></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">

                  <NavDropdown title="Solutions" id="basic-nav-dropdown">
                    <LinkContainer to="/hypermarket"><NavDropdown.Item><LocalGroceryStoreIcon /> Hypermarkets</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/consumergoods"><NavDropdown.Item><PersonIcon /> Consumer Goods</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/healthcare"><NavDropdown.Item><MonitorHeartIcon /> Healthcare & Wellness</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/logistics"><NavDropdown.Item><LocalShippingIcon /> Logistics & Delivery</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/business"><NavDropdown.Item><StoreIcon /> Small & Medium Business</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/enterprise"><NavDropdown.Item><LocalConvenienceStoreIcon /> Small & Medium Enterprise</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/large-enterprise"><NavDropdown.Item><BusinessIcon /> Enterprise</NavDropdown.Item></LinkContainer>
                  </NavDropdown>

                  <NavDropdown title="Why Tech Bees" id="basic-nav-dropdown">
                    <LinkContainer to="/about-us"><NavDropdown.Item><TipsAndUpdatesIcon /> About Us</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/our-story"><NavDropdown.Item><TimelineIcon /> Our Story</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/careers"><NavDropdown.Item><WorkIcon /> Careers</NavDropdown.Item></LinkContainer>
                  </NavDropdown>

                  <LinkContainer to="/our-customers"><Nav.Link href="#customers">Our Customers</Nav.Link></LinkContainer>
                  <LinkContainer to="/our-team"><Nav.Link href="#team" >Our Team</Nav.Link></LinkContainer>
                  <LinkContainer to="/contact-us"><Nav.Link href="#contactus" >Contact Us</Nav.Link></LinkContainer>
                  <Button href="#about" className='about' >About</Button>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </div>
      </header >


    </Sticky >




  )
}

export default Header