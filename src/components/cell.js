import React, { useState } from 'react';

export const Cell = (props) => {
    const [isAlive, setIsAlive] = useState(props.state[props.y]);
    props.state[props.y] = isAlive;

    return <div
        onClick={() => setIsAlive(!isAlive)}
        style={{ background: props.state[props.y] ? 'white' : 'black', width: '10px', height: '10px' }}
    />
} 