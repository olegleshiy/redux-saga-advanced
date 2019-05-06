// Instruments
import { ROOT_URL } from './config';

export const api = new class Api {
    fetchVehicles(page = '1') {
        return fetch(`${ROOT_URL}/vehicles/?page=${page}`);
    }

    fetchPeople(page = '1') {
        return fetch(`${ROOT_URL}/people/?page=${page}`);
    }

    fetchPlanets(page = '1') {
        return fetch(`${ROOT_URL}/planets/?page=${page}`);
    }
}();
