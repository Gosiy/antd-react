import {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {exceptionRoutes, mainRoutes} from "./routes/config";

class App extends Component<any, any>{

    render() {
      return (
        <Router>
          <Switch>
            {
              mainRoutes.map(mRoutes =>{
                return (
                  <Route key={mRoutes.path}
                     path={mRoutes.path}
                     exact={mRoutes.exact}
                     render={routeProps => {
                         return <mRoutes.component {...routeProps}/>
                     }}
                  />
                )
              })
            }
            <Redirect to={exceptionRoutes[0].path}/>
          </Switch>
        </Router>
      );
    }
}
export default App;