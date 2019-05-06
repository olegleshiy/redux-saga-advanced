// Core
import { put, call, apply, delay } from 'redux-saga/effects';

// Instruments
import { swapiActions } from '../../bus/swapi/actions';
import { api } from '../../Api';

export function* fetchPlanets(action) {
    yield delay(1000);

    const response = yield call(api.fetchPlanets, action.payload);
    const data = yield apply(response, response.json);

    yield put(swapiActions.fillPlanets(data.results));
}
