import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from '../components/sessions/session_form_container';
import DashboardContainer from '../components/dashboard/dashboard_container';
import stage1Container from '../components/newTask/stage1_container';
import stage2Container from '../components/newTask/stage2_container';
import stage3Container from '../components/newTask/stage3_container';
import newTaskContainer from '../components/newTask/new_task_container';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/dashboard" component={DashboardContainer} onEnter={_ensureLoggedIn} />
      </Route>
      </Router>
    </Provider>
  );
};

export default Root;

/* <Route path="/dashboard/newTask/" component={newTaskContainer} onEnter={_ensureLoggedIn}>
  <Route path="/dashboard/newTask/stage1/" component={stage1Container} />
  <Route path="/dashboard/newTask/stage2/" component={stage2Container} />
  <Route path="/dashboard/newTask/stage3/" component={stage3Container} />
</Route> */
