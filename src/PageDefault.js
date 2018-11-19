import React from 'react';
import { Helmet } from 'react-helmet';

export default () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="Default description at default page" />
            <title>Default Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div>This is for the main page.</div>
    </div>
);