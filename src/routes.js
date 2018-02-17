import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import MenuBody from './component/MenuBody.js';
import shelfA from './component/shelf/shelfA.js';
import shelfB from './component/shelf/shelfB.js';
import shelfC from './component/shelf/shelfC.js';
import shelfD from './component/shelf/shelfD.js';

export default (
    <Switch>
        <Route component={MenuBody} path ='/' exact />
        <Route component={shelfA} path = '/shelfA' />
        <Route component={shelfB} path = '/shelfB' />
        <Route component={shelfC} path = '/shelfC' />
        <Route component={shelfD} path = '/shelfD' />

    </Switch>
)