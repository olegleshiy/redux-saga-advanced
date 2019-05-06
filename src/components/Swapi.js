// Core
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import { Entity } from './Entity';

// Instruments
import Styles from './styles.module.css';
import { swapiActions } from '../bus/swapi/actions';

const selectState = (state) => {
    return {
        vehicles: state.swapi.vehicles,
        people:   state.swapi.people,
        planets:  state.swapi.planets,
    };
};

export const Swapi = () => {
    const state = useSelector(selectState);
    const dispatch = useDispatch();
    const [ page, setPage ] = useState(1);

    const _getNextPage = () => {
        const currentPage = page;
        const nextPage = currentPage === 4 ? 1 : currentPage + 1;
        dispatch(swapiActions.fetchVehiclesAsync(String(nextPage)));

        setPage(nextPage);
    };

    const _getPage = (event) => {
        const pageToRequest = event.target.dataset.page;

        dispatch(swapiActions.fetchVehiclesAsync(pageToRequest));
    };

    const _getAll = () => {
        const currentPage = page;
        const nextPage = currentPage === 4 ? 1 : currentPage + 1;

        // this.props.fetchVehiclesAsync(nextPage);
        // this.props.fetchPeopleAsync(nextPage);
        // this.props.fetchPlanetsAsync(nextPage);
        dispatch(swapiActions.fetchAll(nextPage));

        setPage(nextPage);
    };

    const _cancelFetch = () => dispatch(swapiActions.cancelFetch());

    const { vehicles, people, planets } = state;

    return (
        <section className = { Styles.swapi }>
            <h1>SWAPI</h1>
            <div className = { Styles.getPages }>
                <button
                    data-page = '1'
                    onClick = { _getPage }>
                    Get page 1
                </button>
                <button
                    data-page = '2'
                    onClick = { _getPage }>
                    Get page 2
                </button>
                <button
                    data-page = '3'
                    onClick = { _getPage }>
                    Get page 3
                </button>
                <button
                    data-page = '4'
                    onClick = { _getPage }>
                    Get page 4
                </button>
            </div>
            <div className = { Styles.getPrecise }>
                <button
                    className = { Styles.startFetch }
                    onClick = { _getNextPage }>
                    Get next vehicles page
                </button>
                <button
                    className = { Styles.cancelFetch }
                    onClick = { _cancelFetch }>
                    Cancel
                </button>
                <button
                    className = { Styles.fetchAll }
                    onClick = { _getAll }>
                    Get all next pages
                </button>
            </div>
            <div className = { Styles.lists }>
                <Entity
                    entities = { vehicles }
                    title = 'Vehicles'
                />
                <Entity
                    entities = { people }
                    title = 'People'
                />
                <Entity
                    entities = { planets }
                    title = 'Planets'
                />
            </div>
        </section>
    );
};
