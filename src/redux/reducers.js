// src/redux/reducers.js
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, EDIT_TASK } from './actions';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                id: Date.now(),
                text: action.payload.text,
                completed: false
            };
            const updatedTasks = [...state.tasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks
            };
        case DELETE_TASK:
            const filteredTasks = state.tasks.filter(task => task.id !== action.payload.id);
            localStorage.setItem('tasks', JSON.stringify(filteredTasks));
            return {
                ...state,
                tasks: filteredTasks
            };
        case TOGGLE_TASK:
            const toggledTasks = state.tasks.map(task =>
                task.id === action.payload.id ? { ...task, completed: !task.completed } : task
            );
            localStorage.setItem('tasks', JSON.stringify(toggledTasks));
            return {
                ...state,
                tasks: toggledTasks
            };
        case EDIT_TASK:
            const editedTasks = state.tasks.map(task =>
                task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
            );
            localStorage.setItem('tasks', JSON.stringify(editedTasks));
            return {
                ...state,
                tasks: editedTasks
            };
        default:
            return state;
    }
};

export default tasksReducer;
