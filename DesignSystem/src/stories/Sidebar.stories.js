import React from 'react';
import Sidebar from '../components/Sidebar';
import menu from '../components/utils/menu';

export default {
    title: 'Sidebar',
    component: 'Sidebar',
}

export const dark = () => <Sidebar data={menu} handleClick={e => { console.log(e.target) }} varient='dark' />;
export const light = () => <Sidebar data={menu} handleClick={e => { console.log(e.target) }} varient='light' />;