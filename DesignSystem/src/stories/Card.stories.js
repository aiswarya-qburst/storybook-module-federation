import React from 'react';
import Card from '../components/Card/index';
import data from '../components/utils/data';

export default {
    title: 'Card',
    component: 'Card'
};

export const basic = () => <Card data={data} varient='basic'></Card>;
export const blue = () => <Card data={data} varient='blue'></Card>;
