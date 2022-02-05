import React from 'react';

import { Header, Blog, Projects, Footer } from './containers';
import { Navbar, Skills,} from './components';
import './App.css'
import Possibility from './containers/possibility/possibility';
import Timeline from './components/timeline/Timeline';


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
     <Possibility />
     <Footer />
  </div>
  )
};

export default App;
