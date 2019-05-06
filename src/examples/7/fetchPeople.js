// Core
import { put, call, apply, cancelled, delay } from 'redux-saga/effects';

// Instruments
import { swapiActions } from '../../bus/swapi/actions';
import { api } from '../../Api';

export function* fetchPeople(action) {
    try {
        yield delay(3000);

        const response = yield call(api.fetchPeople, action.payload);
        const data = yield apply(response, response.json);

        yield put(swapiActions.fillPeople(data.results));
    } catch (error) {
        console.log('→ error', error);
    } finally {
        if (yield cancelled()) {
            console.log('→ cancelled!', action.type);
        }
    }
}
