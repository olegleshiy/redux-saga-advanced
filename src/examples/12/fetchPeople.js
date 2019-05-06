// Core
import { put, call, apply, delay } from 'redux-saga/effects';

// Instruments
import { swapiActions } from '../../bus/swapi/actions';
import { api } from '../../Api';

export function* fetchPeople(action) {
    yield delay(1000);

    const response = yield call(api.fetchPeople, action.payload);
    const data = yield apply(response, response.json);

    yield put(swapiActions.fillPeople(data.results));
}
