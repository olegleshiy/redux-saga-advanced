// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import './theme/init.css';
import { store } from './init';

// App
import { Swapi } from './components/Swapi';

render(
    <Provider store = { store }>
        <Swapi />
    </Provider>,
    document.getElementById('root'),
);
