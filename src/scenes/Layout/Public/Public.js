import * as React from "react";

import { Router, Route, Switch } from "react-router-dom";
import { Login } from "./Views/Auth/Login/Login";

export const Public = ({ history }) => {
	return (
		<Router history={history}>
			<Switch className='h-100'>
				<Route exact path='/login' component={Login} />
			</Switch>
		</Router>
	)
}
