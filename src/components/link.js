import React from 'react';

import './link.css';

export default function Link(props) {
    return (
        <li key={props.index}><a href={props.href}>{props.text}</a></li>
    )
}