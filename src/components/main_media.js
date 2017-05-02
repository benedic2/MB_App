import React, {Component} from 'react';

import ContentMedia from './content_media';
import Banner from './banner';

export default class MainResume extends Component {
    render (){
    return (
        <div>
            <Banner />
            <ContentMedia />
        </div>
    );
    }
    };

