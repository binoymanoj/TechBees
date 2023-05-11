import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import { Outlet } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Hypermarket from './pages/solutions/hypermarket/Hypermarket';
import Consumergoods from './pages/solutions/consumergoods/Consumergoods';
import Healthcare from './pages/solutions/healthcare/Healthcare';
import Logistics from './pages/solutions/logistics/Logistics';
import Smallbusiness from './pages/solutions/smallbusiness/Smallbusiness';
import Smallenterprise from './pages/solutions/smallenterprise/Smallenterprise';
import Largeenterprise from './pages/solutions/large-enterprise/Largeenterprise';
import Aboutus from './pages/whytechbees/aboutus/Aboutus';
import Ourstory from './pages/whytechbees/ourstory/Ourstory';
import Careers from './pages/whytechbees/careers/Careers';
import Ourcustomers from './pages/ourcustomers/Ourcustomers';
import Ourteam from './pages/ourteam/Ourteam';
import Contactus from './pages/contactus/Contactus';
import Pagenotfound from './pages/otherpages/404error/Pagenotfound';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <About />
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <>

        {/* <Routes>
          <Route path="/" exact>
            {/* <Route path="about" element={<About />} /> }
            <Home />
          </Route>
        </Routes> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="hypermarket" element={<Hypermarket />} />
            <Route path="consumergoods" element={<Consumergoods />} />
            <Route path="healthcare" element={<Healthcare />} />
            <Route path="logistics" element={<Logistics />} />
            <Route path="business" element={<Smallbusiness />} />
            <Route path="enterprise" element={<Smallenterprise />} />
            <Route path="large-enterprise" element={<Largeenterprise />} />
            <Route path="about-us" element={<Aboutus />} />
            <Route path="our-story" element={<Ourstory />} />
            <Route path="careers" element={<Careers />} />
            <Route path="our-customers" element={<Ourcustomers />} />
            <Route path="our-team" element={<Ourteam />} />
            <Route path="contact-us" element={<Contactus />} />

            <Route path="*" element={<Pagenotfound />} />
          </Route>
        </Routes>

      </>
    </div >
  )
}

export default App
