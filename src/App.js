import Nav from './Home/Nav';
import './App.css';
import './Styles/fonts.css'
import Started from './Home/Started';
import Services from './Services/Services';
import CompanyTrust from './CompanyTrust/CompanyTrust';
import Sponsors from './Sponsors/Sponsors';
import Customers from './Customers/Customers';
import WebsiteSCFC from './WebsiteSCFC/WebsiteSCFC';
import BuildingSoftware from './BuildingSoftwareSection/BuildingSoftware';
import DesignDev from './Design&DevApproch/DesignDev';
import OurStack from './OurStack/OurStack';
import DevWork from './DevWork/DevWork';
import FeaturedResource from './FeaturedResources/FeaturedResource';

function App() {
  return (
    <>
    <Nav/>
    <Started/>
    <Services/>
    <CompanyTrust/>
    <Sponsors/>
    <Customers/>
    <WebsiteSCFC/>
    <BuildingSoftware/>
    <DesignDev/>
    <OurStack/>
    <DevWork/>
    <FeaturedResource/>
    </>
  );
}

export default App;
