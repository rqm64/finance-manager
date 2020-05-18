import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {IDB} from 'Common';
import {Accounting} from 'Modules/Accounting';
import {NavigationLayout} from 'Modules/Navigation';
import {ROUTE_PATH} from './Consts';

import 'antd/dist/antd.css';

IDB.open();

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
