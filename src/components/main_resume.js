import React, {Component} from 'react';

import ContentResume from './content_resume';
import Banner from './banner';

export default class MainResume extends Component {
    render (){
    return (
        <div>
            <Banner />
            <ContentResume />
        </div>
    );
    }
    };

