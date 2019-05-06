// Core
import { put, call, apply, cancelled, delay } from 'redux-saga/effects';

// Instruments
import { swapiActions } from '../../bus/swapi/actions';
import { api } from '../../Api';

export function* fetchPlanets(action) {
    try {
        yield delay(3000);

        const response = yield call(api.fetchPlanets, action.payload);
        const data = yield apply(response, response.json);

        yield put(swapiActions.fillPlanets(data.results));
    } catch (error) {
        console.log('→ error', error);
    } finally {
        if (yield cancelled()) {
            console.log('→ cancelled!', action.type);
        }
    }
}
