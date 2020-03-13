import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Calculator} from "./component/Calculator";

function App() {
    return (
      <section className="hero is-fullheight is-dark">
          <div className="hero-body">
              <div className="container has-text-centered" style={{padding: '0px 415px'}}>
                  <Calculator />
              </div>
          </div>
      </section>
    );
}

export default App;
