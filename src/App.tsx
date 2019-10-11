import React from 'react';
import {Route, Switch} from 'react-router-dom';
import InitialPage from "./pages/InitialPage";


const App: React.FC = () => {
    return (
        <div>
            <InitialPage/>
            <Switch>
                <Route path='/'/>
                <Route path='/logged-view'/>
            </Switch>
        </div>
    );
};

export default App;
