import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from 'app/reducer';

const configureStore = () => {
    const middlewares = [thunk];

    return createStore(
        appReducer,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;