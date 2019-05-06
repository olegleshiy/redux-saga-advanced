// Core
import React from 'react';

export const Entity = (props) => {
    const entitiesJSX = props.entities.map((entity) => (
        <li key = { entity.name }>
            <span>
                <span>Name:</span> {entity.name}
            </span>
        </li>
    ));

    return (
        <section>
            <h1>{props.title}</h1>
            <ul>{entitiesJSX}</ul>
        </section>
    );
};
