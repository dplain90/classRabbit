import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import AccountContainer from './account/account_container';
import SessionFormContainer from '../components/forms/sessions/session_form_container';
import DashboardContainer from '../components/dashboard/dashboard_container';
import { getTask, clearTask } from './forms/newTask/session_util';
import SplashPageContainer from './splashPage/splash_page_container';
import newTaskContainer from '../components/forms/newTask/new_task_container';
import NewTaskStage1Container from './forms/newTask/stage1/stage1_container';
import NewTaskStage2Container from './forms/newTask/stage2/stage2_container';
import NewTaskStage3Container from './forms/newTask/stage3/stage3_container';
import { clearTaskers } from '../actions/user_actions';
import { clearNewTask } from '../actions/task_actions';
import { updateNewTask } from '../actions/task_actions';

import App from './app';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    const redirect = store.getState().task.redirect;
    if(!currentUser){
      redirect ? replace('/signup') : replace('/login');
    } else {
      if(redirect) replace('/dashboard/newTask/stage1');
    }

  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    const redirect = store.getState().task.redirect;
    if (currentUser) {
      debugger
      replace('/dashboard');
    }
  };

  const _clearNewTask = () => {
    store.dispatch(clearNewTask());
    store.dispatch(clearTaskers());

  }

  return (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SplashPageContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/account" component={AccountContainer} onEnter={_ensureLoggedIn} />
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/dashboard" component={DashboardContainer} onEnter={_clearNewTask} />
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
