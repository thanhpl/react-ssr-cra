import React from 'react';
import { Helmet } from 'react-helmet';

export default () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Another description at another page" />
            <title>Another Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div>This is for another page.</div>
    </div>

);