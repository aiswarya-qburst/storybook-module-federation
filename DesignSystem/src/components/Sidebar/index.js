import React from 'react';
import MenuItem from './MenuItem';
import './styles.css';

const Sidebar = ({ data, handleClick, varient, children }) => {
    return (
        <div class={`sidenav ${varient}`}>
            {children}
            {data.map(d => <MenuItem handleClick={handleClick} key={d.type}>{d.type}</MenuItem>)}
        </div>
    );
};

export default Sidebar;