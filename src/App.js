import React from 'react';
import { Header, Blog, Projects, Footer } from './containers';
import { Navbar, Skills,} from './components';
import './App.css'
import Timeline from './components/timeline/Timeline';
import Contact from './containers/contact/Contact';


const App = () => {
  return(
  <div className="App">
     <div className="gradient__bg">
         <Navbar />
         <Header />
     </div>
     <Skills />
     <Blog />
      <Timeline />
     <Projects />
     <Contact />
     <Footer />
  </div>
  )
};

export default App;
