import { Switch, Route } from 'react-router-dom';
import { firebaseConfig } from '../config/Config';
import { firebase } from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

import {Home} from './Home';
import {About} from './About';

export function Content( props ) {
  return(
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  )
}