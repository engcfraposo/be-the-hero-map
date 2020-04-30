import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Maps from './pages/Maps';
import Ongs from './pages/Ong';

function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/incidents/new" component={NewIncident} />
            <Route path="/incidents" component={Incidents} />
            <Route path="/detail" component={Detail} />
            <Route path="/map" component={Maps} />
            <Route path="/ong" component={Ongs} />
           
        </Switch>
        </BrowserRouter>

    )

}

export default Routes