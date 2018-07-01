import React from 'react';

import Link from './link';

import './navigation-bar.css';

export default function NavigationBar(props) {
    const liLinks = props.links.map((link, index) =>
        (
            <Link key={index} {...link} />
        )
    )
    return (
        <div className="navWrapper">
            <div className="navigation-bar">
                <h1>{props.title}</h1>
                <nav>
                    <ul>{liLinks}</ul>
                </nav>
            </div>
        </div>
    )
}