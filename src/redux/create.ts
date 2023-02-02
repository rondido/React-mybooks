import {createStore} from '@reduxjs/toolkit';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './modules/rootSaga';

//store
const create = () =>{
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);
    return store;
}


export default create;