import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Accounting} from 'modules/Accounting';
import {NavigationLayout} from 'modules/Navigation';
import {ROUTE_PATH} from './Consts';

import 'antd/dist/antd.css';

const App = () => {
    return(
        <BrowserRouter>
            <NavigationLayout>
                <Switch>
                    <Route exact path={[ROUTE_PATH.HOME, ROUTE_PATH.ACCOUNTING_TABLE]} component={Accounting} />
                </Switch>
            </NavigationLayout>
        </BrowserRouter>
    )
}

export default App;
