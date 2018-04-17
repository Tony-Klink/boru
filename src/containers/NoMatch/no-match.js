import React from 'react';

export const NoMatch = ({location}) => (
    <div>
        <h3>
            Emptyness at <code>{location.pathname}</code>
        </h3>
    </div>
);