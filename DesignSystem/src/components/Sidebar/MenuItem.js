import React from 'react';

const MenuItem = (props) => {
    return <a onClick={props.handleClick}>{props.children}</a>;
};

export default MenuItem;