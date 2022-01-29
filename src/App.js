import React from 'react';

import { Header, Blog, Features, Footer } from './containers';
import { Navbar, Article, Brand,} from './components';

import './App.css'

const App = () => {
  return(
  <div className="App">
     <div className="gradient__bg">
         <Navbar />
         <Header />
     </div>
     <Brand />
     <Article />
     <Features />
     <Blog />
     <Footer />
  </div>
  )
};

export default App;
