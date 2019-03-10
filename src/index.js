import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('FETCH_TAGS', fetchTags);
    yield takeEvery('POST_PROJECT', postProject);
    yield takeEvery('DELETE_PROJECT', deleteProject);
}

function* fetchProjects() {
    try{
        const projects = yield axios.get('/project');
        console.log(projects.data);
        yield put({type:'SET_PROJECTS', payload:projects.data});
    }
    catch (err) {
        console.log(`couldn't fetch projects`, err);
    }
}

function* fetchTags() {
    try {
        const projects = yield axios.get('/tag');
        yield put({ type: 'SET_TAGS', payload: projects.data });
    }
    catch (err) {
        console.log(`couldn't fetch tags`, err);
    }
}

function* postProject(action) {
    try {
        yield axios.post('/project', action.payload);
        yield put({ type: 'FETCH_PROJECTS'});
        yield put({ type: 'CONFIRM_POST', payload: true});
    }
    catch (err) {
        yield put({ type: 'CONFIRM_POST', payload: false });
        console.log(`couldn't add project`, err);
    }
}

function* deleteProject(action) {
    try {
        yield axios.delete('/project/' + action.payload);
        yield put({ type: 'FETCH_PROJECTS' });
    }
    catch (err) {
        console.log(`couldn't delete project`, err);
    }
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}


const confirmPost = (state = false, action) => {
    switch (action.type) {
        case 'CONFIRM_POST':
            return {
                open: true,
                status: action.payload
            };
        case 'RESET_POST':
            return {
                open: false,
            };;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
        confirmPost,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
