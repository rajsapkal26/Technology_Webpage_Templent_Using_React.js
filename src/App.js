import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services_Hero from './Services/Services_Details/Services_Hero';
import Nav from './header_footer/Nav';
import Footer from './header_footer/Footer';
import Hero from './Home/Hero Section and below one/Hero';
import Services_list from './Services/Services_List/Services_list';
import News from './News/News';
import About_our_company from './About_Us/About_our_company';
import Contact from './Contact/Contact';


function App() {

  return (

    <>

 <Router>
 <Nav/>
      <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/services_list" element={<Services_list/>} />
          <Route path="/services_details" element={<Services_Hero/>} />
          <Route path="/news" element={<News/>}/>
          <Route path="/about_us" element={<About_our_company/>}/>
          <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
</Router>

    </>
  );
}

export default App;
