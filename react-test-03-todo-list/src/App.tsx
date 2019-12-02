import React, { useState, FormEvent, ChangeEvent, ReactElement } from 'react';

/**
 * https://github.com/mingyuchoo/todo-list-react-ts/blob/master/src/App.tsx
 * https://github.com/mingyuchoo/react-todo-2019/blob/master/src/components/ToDo.js
 */
interface NewTaskFormProps {
  task: Task;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewTaskForm: React.FC<NewTaskFormProps> = ({
  task,
  onSubmit,
  onChange,
}): ReactElement => {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={task.name} />
      <button type="submit">Add a task</button>
    </form>
  );
};

interface TasksListItemProps {
  task: Task;
  onDelete: (task: Task) => void;
}

const TaskListItem: React.FC<TasksListItemProps> = ({
  task,
  onDelete,
}): ReactElement => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <li>
      {task.name} <button onClick={onClick}>X</button>
    </li>
  );
};

interface TaskListProps {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

const TasksList: React.FC<TaskListProps> = ({
  tasks,
  onDelete,
}): ReactElement => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskListItem task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
};

interface Task {
  id: number;
  name: string;
}

interface State {
  newTask: Task;
  tasks: Task[];
}

const App: React.FC = (): ReactElement => {
  const [newTask, setNewTask] = useState({ id: 3, name: '' });
  const [tasks, setTasks] = useState([
    { id: 1, name: 'clean the house' },
    { id: 2, name: 'buy milk' },
  ]);

  const deleteTask = (taskToDelete: Task) => {
    setTasks(tasks.filter(task => task.id !== taskToDelete.id));
  };

  const addTask = (event: FormEvent<HTMLFormElement>) => {
    setTasks([newTask, ...tasks]);
  };
  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, name: event.target.value });
  };
  return (
    <div>
      <h2>Hello React TS!</h2>
      <NewTaskForm
        task={newTask}
        onSubmit={addTask}
        onChange={handleTaskChange}
      />
      <TasksList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
