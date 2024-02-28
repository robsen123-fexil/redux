import {call , put , takeEvery} from 'redux-saga/effects';
import { getsongssuccess } from './songstate';
import { getsongsFetch } from "./songstate";

function* workGetsongsFetch(){
    const songs=yield call(()=>fetch('https://api.thesongapi.com/v1/breeds'));
    const formattedsongs =yield songs.json();
    const formattedsongsshortened=formattedsongs.slice(0,10);
    yield put(getsongssuccess(formattedsongsshortened));
}
function* songsaga() {
    yield takeEvery(getsongsFetch.type, workGetsongsFetch);
}

export default songsaga