// src/App.js
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import StoreProvider from './redux/store';
import './App.css';

const App = () => {
    return (
        <StoreProvider>
            <div className="App">
                <h1>To-Do App</h1>
                <TaskInput />
                <TaskList />
            </div>
        </StoreProvider>
    );
};

export default App;
