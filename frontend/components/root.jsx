import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from '../components/forms/sessions/session_form_container';
import DashboardContainer from '../components/dashboard/dashboard_container';
import SplashPage from '../components/splashPage/splash_page';
import newTaskContainer from '../components/forms/newTask/new_task_container';
import NewTaskStage1Container from './forms/newTask/stage1/stage1_container';
import NewTaskStage2Container from './forms/newTask/stage2/stage2_container';
import NewTaskStage3Container from './forms/newTask/stage3/stage3_container';

import { getTask, clearTask } from './forms/newTask/session_util';
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
      replace('/dashboard');
    }
  };

  return (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SplashPage} />
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/dashboard" component={DashboardContainer} onEnter={_ensureLoggedIn} />
          <Route path="/dashboard/newTask" component={newTaskContainer} onEnter={_ensureLoggedIn}>
            <Route path="/dashboard/newTask/stage1" onEnter={_ensureLoggedIn} component={NewTaskStage1Container} />
            <Route path="/dashboard/newTask/stage2" onEnter={_ensureLoggedIn} component={NewTaskStage2Container} />
            <Route path="/dashboard/newTask/stage3" onEnter={_ensureLoggedIn} component={NewTaskStage3Container} />
          </Route>
        </Route>
    </Router>
  </Provider>
  );
};

export default Root;
