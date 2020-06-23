import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';
import { fetchCollectionsStartAsync } from './shop/shop.actions';

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart)
    ])

}