// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/actions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    };

    const handleToggleTask = (id) => {
        dispatch(toggleTask(id));
    };

    const handleEditTask = (id, newTask) => {
        dispatch(editTask(id, newTask));
    };

    return (
        <div className="task-list">
            {tasks.map(task => (
                <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                    <span onClick={() => handleToggleTask(task.id)}>{task.text}</span>
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    <button onClick={() => handleEditTask(task.id, prompt('Edit Task', task.text))}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
