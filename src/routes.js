import React from 'react';
import { Route, IndexRoute} from 'react-router';
      
import App from './components/app';
import MainResume from './components/main_resume'
import MainHome from './components/main_home'
import MainMedia from './components/main_media'
import MainPersonal from './components/main_personal'
import MainLinks from './components/main_links'



export default (
<Route path="/" component = {App}>
    <IndexRoute component = {MainHome} />
    <Route path="resume" component = {MainResume} />
    <Route path="media" component = {MainMedia} />
    <Route path="publications" component = {MainLinks} />
    <Route path="personal" component = {MainPersonal} />
</Route>
);