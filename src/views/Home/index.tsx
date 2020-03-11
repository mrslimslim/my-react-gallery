import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Tree from '../../views/Tree';
import './style.scss';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <HashRouter>
          {/* <Route /> */}
          <Switch>
            <Route path="/">
              <Tree />
            </Route>
          </Switch>
        </HashRouter>
      </Layout>
    );
  }
}

export default Home;
