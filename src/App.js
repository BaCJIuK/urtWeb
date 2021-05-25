
import React from 'react'
import s from './App.module.css';
import Header from './Components/Header/Header';
import { Route } from 'react-router-dom';
import About from './Components/Content/About/About';
import Licenses from './Components/Content/Licenses/Licenses';
import Certificate from './Components/Content/Certificate/Certificate';
import Contact from './Components/Content/Contact/Contact';
import Services from './Components/Content/Services/Services';
import BuildFiber from './Components/Content/Services/BuildFiber/BuildFiber';
import MobileNetwork from './Components/Content/Services/MobileNetwork/MobileNetwork';
import Lab from './Components/Content/Services/Lab/Lab';
import Service from './Components/Content/Services/Service/Service';
import AlarmSystem from './Components/Content/Services/AlarmSystem/AlarmSystem';
import ServiceFiber from './Components/Content/Services/ServiceFiber/ServiceFiber';



function App() {
  return (
    <div className={s.wrapper}>
      <div className={s.header} >
        <Header />
      </div>
      {/*   <div className={s.content}>
        <Route exact path='/' component={About} />
        <Route path='/about' component={About} />
        <Route path='/licenses' component={Licenses} />
        <Route path='/certificate' component={Certificate} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/services' component={Services} />
        <Route path='/services/buildfiber' component={BuildFiber} />
        <Route path='/services/mobilenetwork' component={MobileNetwork} />
        <Route path='/services/lab' component={Lab} />
        <Route path='/services/service' component={Service} />
        <Route path='/services/alarmsystem' component={AlarmSystem} />
        <Route path='/services/servicefiber' component={ServiceFiber} />
      </div> */}
    </div >
  );
}

export default App;
