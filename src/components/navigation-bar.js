import React from 'react';

import './navigation-bar.css';

export default function NavigationBar(props) {
    const liLinks = props.links.map((link, index) =>
        (
            <li><a href={link.href}>{link.text}</a></li>
        )
    )
    return (
        <div className="navigation-bar">
            <h1>{props.title}</h1>
            <nav>
            <ul>{liLinks}</ul>
            </nav>
        </div>
    )
}