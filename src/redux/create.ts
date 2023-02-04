import {createStore} from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './modules/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
//import {createReduxHistoryContext} from 'redux-first-history';
import history  from '../history';
//import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

//store
const create = () =>{
    // const {createReduxHistory,routerMiddleware,routerReducer} = createReduxHistoryContext({
    //     history:createBrowserHistory(),
    // });
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
    reducer(history), 
    composeWithDevTools(applyMiddleware(sagaMiddleware,routerMiddleware(history))));

    sagaMiddleware.run(rootSaga);
    return store;
}


export default create;