import React from 'react';
import {  Route, Switch  } from 'react-router-dom';

import LoaderDemo from '../src/components/LoaderDemo';
const Home = () => {
    return(
      <div> You are at Home </div>)
  }
const Routing = () =>
(
<Switch> 
    <Route exact path="/" component={Home}/>
     <Route path="/loaderdemo" component={LoaderDemo}/>
     {/* <Route path="/genericcontainer" component={GenericContainerDemo}/>
     <Route path="/customform" component={CustomFormDemo}/>
     <Route path="/refsdemo" component={RefsDemo}/>
     <Route path="/requireauth" component = {RequireAuthDemo} /> */}
</Switch>
)
export default Routing