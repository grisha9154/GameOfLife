import React, { useState, useEffect } from 'react';

import { Cell } from './cell';


const Row = (props) => {
    const cells = [];
    for (let i = 0; i < props.heigth; i++) {
        cells[i] = <Cell key={`${i}${props.state[i]}`} x={props.x} y={i} state={props.state} />
    }

    return <div style={{ display: 'flex' }}>{cells}</div>;
}

const Columns = (props) => {
    const columns = [];
    for (let i = 0; i < props.width; i++) {
        if (props.state[i] === undefined) {
            props.state[i] = [];
        }
        columns[i] = <Row heigth={props.heigth} key={Math.random()} state={props.state[i]} x={i} />
    }

    return columns;
}

const getNeighbours = (x, y) => {
    return [
        { y: y - 1, x },
        { y: y - 1, x: x + 1 },
        { y, x: x + 1 },
        { y: y + 1, x: x + 1 },
        { y: y + 1, x },
        { y: y + 1, x: x - 1 },
        { y, x: x - 1 },
        { y: y - 1, x: x - 1 }
    ];
}

export const GameBoard = (props) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        setInterval(() => {
            const newState = [];
            state.forEach((colums, y) => {
                newState[y] = [];
                colums.forEach((cell, x) => {
                    const neighbours = getNeighbours(x, y);
                    let aliveCount = 0;

                    neighbours.forEach((cort) => {
                        if (state[cort.y] && state[cort.y][cort.x]) {
                            aliveCount += 1;
                        }
                    });

                    if (aliveCount < 2) {
                        newState[y][x] = false;
                    } else if (aliveCount === 2) {
                        newState[y][x] = state[y][x];
                    } else
                        if (aliveCount === 3) {
                            newState[y][x] = true;
                        } else if (!cell) {
                            newState[y][x] = true;
                        } else {
                            newState[y][x] = false;
                        }
                })
            });
            debugger;
            setState(newState);
            console.log('Boom')
        }, 5000);
    }, []);

    return (<span><Columns {...props} state={state} key={Date.now()} /></span>);
}