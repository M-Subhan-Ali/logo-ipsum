import Nav from './Home/Nav';
import './App.css';
import './Styles/fonts.css'
import Started from './Home/Started';
import Services from './Services/Services';
import CompanyTrust from './CompanyTrust/CompanyTrust';
import Sponsors from './Sponsors/Sponsors';
import Customers from './Customers/Customers';

function App() {
  return (
    <>
    <Nav/>
    <Started/>
    <Services/>
    <CompanyTrust/>
    <Sponsors/>
    <Customers/>
    </>
  );
}

export default App;
