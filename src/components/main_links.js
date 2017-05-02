import React, {Component} from 'react';

import ContentLinks from './content_links';
import Banner from './banner';

export default class MainLinks extends Component {
    render (){
    return (
        <div>
            <Banner />
            <ContentLinks />
        </div>
    );
    }
    };

