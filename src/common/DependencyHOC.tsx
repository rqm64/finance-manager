import React from 'react';

export function DependencyHOC(Component: React.FC): React.FC {

    return function DependencyContainer(props) {
        return <Component {...props} />;
    };
};
