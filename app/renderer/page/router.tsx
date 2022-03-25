/**
 * 路由组件
 * */
import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import store from '../redux/store';
import Root from '../components/root';
import Vitae from '../components/vitae';
import ContactUs from '../components/ContactUs';

const index = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <Root />
          </Route>
          <Route path="/vitae" exact>
            <Vitae />
          </Route>
          <Route path="/ContactUs" exact>
            <ContactUs />
          </Route>
        </Switch>
        {/* <Redirect to="/" /> */}
      </HashRouter>
    </Provider>

  );
}

export default index;