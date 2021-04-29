
import React from 'react'
import s from './App.module.css';
import Header from './Components/Header/Header';
import { Route } from 'react-router-dom';
import About from './Components/Content/About/About';
import Services from './Components/Content/Services/Services';
import Licenses from './Components/Content/Licenses/Licenses';
import Certificate from './Components/Content/Certificate/Certificate';
import Contact from './Components/Content/Contact/Contact';

function App() {
  return (
    <div className={s.wrapper}>
      <div className={s.header} >
        <Header />
      </div>
      <div className={s.content}>
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/licenses' component={Licenses} />
        <Route path='/certificate' component={Certificate} />
        <Route path='/contact' component={Contact} />
      </div>
    </div >
  );
}

export default App;
