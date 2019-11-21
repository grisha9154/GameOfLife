import React from 'react';

export const LeftPanel = (props) => {
    const handleClick = () => {
        const height = +document.getElementById('height_input').value;
        const width = +document.getElementById('width_input').value;
        props.setSize({ height, width });
    }

    return <span>
        <input name='height' id={'height_input'} style={{ display: 'block' }} defaultValue={props.height} />
        <input name='width' id={'width_input'} style={{ display: 'block' }} defaultValue={props.width} />
        <button onClick={handleClick}>Create Board</button>
    </span>
}