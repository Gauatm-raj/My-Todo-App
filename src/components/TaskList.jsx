import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // make a state for edit and update the task
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedTask, setUpdatedTask] = useState('');

  //this function edit task after edit button clicked
  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setUpdatedTask(task.text);
  };

  // this function save the edited task to state
  const handleSaveEdit = (id) => {
    dispatch(editTask(id, updatedTask));
    setEditingTaskId(null);
    setUpdatedTask('');
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={updatedTask}
                  onChange={(e) => setUpdatedTask(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                <button onClick={() => setEditingTaskId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
