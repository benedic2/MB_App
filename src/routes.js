import React from 'react';
import { Route, IndexRoute} from 'react-router';
      
import App from './components/app';
import MainHome from './components/main_home'
import Top from './components/top'
import Middle from './components/middle'
import Bottom from './components/bottom'
import Tracker from './components/tracker'




export default (
<Route path="/" component = {App}>
    <IndexRoute component = {MainHome} />
    <Route path="top" component = {Top} />
    <Route path="middle" component = {Middle} />
    <Route path="bottom" component = {Bottom} />
    <Route path="tracker" component = {Tracker} />
</Route>
);