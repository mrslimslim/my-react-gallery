import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import About from '../../components/About';
import './style.scss';

class Home extends React.Component {
  render() {
    return (
      <section className="gallery-home">
        <HashRouter>
          {/* <Route /> */}
          <Switch>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </HashRouter>
      </section>
    );
  }
}

export default Home;
