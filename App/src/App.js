import React, { useState } from "react";
import Card from 'xolvio_ui/components/Card';
import Sidebar from 'xolvio_ui/components/Sidebar';
import data from './data';
import './App.css';

function App() {
    const [charts, updateCharts] = useState(data);

    const handleClick = (e) => updateCharts(data.filter(d => d.type === e.target.text));

    return (
        <div>
            <Sidebar data={data} handleClick={handleClick} varient='light'>
                <a onClick={() => updateCharts(data)}>All</a>
            </Sidebar>
            <div class="main">
                {charts.map(chart => <Card data={chart} varient="basic" />)}
            </div>
        </div>
    );
}

export default App;