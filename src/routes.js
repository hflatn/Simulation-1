import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import MenuBody from './component/menu/MenuBody.js';
import shelf from './component/shelf/shelf';
import bin from './component/bin/bin.js';
import create from './component/create/create.js';

export default (
    <Switch>
        <Route component={ MenuBody } path = '/' exact />
        <Route component={ shelf } path = '/shelf/:shelve' exact />
        <Route component={ create } path = '/shelf/:shelve/create/:id' />
        <Route component={ bin } path= '/shelf/:shelve/bin/:id'  />
    </Switch>
)

// conditionial rendering  

// this.state = {
//     products: [{name:'test1', show: 'hi'}]
// }

// {this.state.admin ? <div> Hey I'm an admin </div> : </div> I am not an admin </div>}

// this.state.products.map((el, i, arr) => {
//     el.show ? <div>{el.name} </div> : <div> no product for you </div>
//     return <div> el.name </div>
// })

// this.state.products.map((el, i, arr) => {
//     return <div className={el.show ? 'red': null}> {el.name} </div>
// })