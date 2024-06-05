// src/redux/store.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tasksReducer from './reducers';

const store = createStore(tasksReducer);

const StoreProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default StoreProvider;
