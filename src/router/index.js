import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './login';
import Home from './home';
import Loans from './loan';
import History from './history';
import Barcode from './barcode';
import Me from './me';
import Product from './product';
import Contact from './contact';
import Place from './place';
import SubPlace from './place/subIndex.js';
import Question from './question';
import Channel from './channel';
import LoanPDF from './loan/components/LoanPDF';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        {/* <Scene key="login" component={Login} title="Login" hideNavBar />  */}
        <Scene key="home" component={Home} title="Home" hideNavBar />
        <Scene key="login" component={Login} title="Login" hideNavBar />
        <Scene key="loans" component={Loans} title="Loans" hideNavBar />
        <Scene key="history" component={History} title="History" hideNavBar />
        <Scene key="barcode" component={Barcode} title="Barcode" hideNavBar />
        <Scene key="me" component={Me} title="Me" hideNavBar />
        <Scene key="product" component={Product} title="Product" hideNavBar />
        <Scene key="contact" component={Contact} title="Contact" hideNavBar />
        <Scene key="place" component={Place} title="Place" hideNavBar />
        <Scene key="subplace" component={SubPlace} title="SubPlace" hideNavBar />
        <Scene key="question" component={Question} title="Question" hideNavBar />
        {<Scene key="channel" component={Channel} title="Channel" hideNavBar />}
        <Scene key="loanPDF" component={LoanPDF} title="LoanPDF" hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
