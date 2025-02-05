import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Homepage } from './components/homepage';


function App() {
	
	return (
	<Router>
		<Switch>
      <Route path="/">
		  	<Homepage path={null}/>
      </Route>
      <Route path="/trussle">
		    <Homepage path={null}/>
      </Route>
    </Switch>
  </Router>		
	);
}

export default App;
