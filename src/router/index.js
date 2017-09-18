import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './login';
import Home from './home';
import Loans from './loan';
import History from './history';
import Barcode from './barcode';
import Me from './me';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">                
        <Scene key="barcode" component={Barcode} title="Barcode" hideNavBar />             
        {/* <Scene key="login" component={Login} title="Login" hideNavBar />  */}            
        <Scene key="home" component={Home} title="Home" hideNavBar />
        <Scene key="login" component={Login} title="Login" hideNavBar />        
        <Scene key="loans" component={Loans} title="Loans" hideNavBar />
        <Scene key="history" component={History} title="History" hideNavBar /> 
        {/* <Scene key="barcode" component={Barcode} title="Barcode" hideNavBar />      */}
        <Scene key="me" component={Me} title="Me" hideNavBar />
      </Scene> 
    </Router>
  );
};

export default RouterComponent;
