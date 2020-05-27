import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Transactions} from 'Modules/Transactions';
import {NavigationLayout} from 'Modules/Navigation';
import {ROUTE_PATH} from './Consts';
import {openIDB} from './IDB/Database';
import {store} from './Store';

import 'antd/dist/antd.css';

openIDB();

const App = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <NavigationLayout>
                    <Switch>
                        <Route exact path={[ROUTE_PATH.HOME, ROUTE_PATH.TRANSACTIONS_TABLE]} component={Transactions} />
                    </Switch>
                </NavigationLayout>
            </BrowserRouter>
        </Provider>
    )
};

export default App;
