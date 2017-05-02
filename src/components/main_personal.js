import React, {Component} from 'react';

import ContentPersonal from './content_personal';
import Banner from './banner';

export default class MainPersonal extends Component {
    render (){
    return (
        <div>
            <Banner />
            <ContentPersonal />
        </div>
    );
    }
    };

