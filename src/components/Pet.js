import React from 'react';

const Pet = (props) => {
    console.log(props.name);
    return (<div>
        <img style={{ width: '160px', height: '140px' }} src={props.photoUrls[0]} />
        <div style={{ display: 'inline-block', marginLeft: 10, verticalAlign: 'top' }}>
            <div style={{ marginLeft: 10, verticalAlign: 'top', textAlign: 'left' }}>Name: {props.name}</div>
            <div style={{ marginLeft: 10, verticalAlign: 'top', textAlign: 'left' }}>Status: {props.status}</div>
        </div>

        <div ></div>
    </div>);
}

export default Pet;
