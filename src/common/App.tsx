import React, {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Transactions} from 'Modules/Transactions';
import {NavigationLayout} from 'Modules/Navigation';
import {ROUTE_PATH} from './Consts';
import './i18n'; 
import {openIDB} from './IDB/Database';
import {store} from './Store';

const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        openIDB(setLoaded);
    }, []);

    return loaded && (
        <Provider store={store}>
            <BrowserRouter>
                <NavigationLayout>
                    <Switch>
                        <Route exact path={[ROUTE_PATH.HOME, ROUTE_PATH.TRANSACTIONS_TABLE]} component={Transactions} />
                    </Switch>
                </NavigationLayout>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
