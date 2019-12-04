import React, { useState, FormEvent, ChangeEvent, ReactElement } from 'react';

/**
 * https://medium.com/javascript-in-plain-english/i-tested-a-react-app-with-jest-testing-library-and-cypress-here-are-the-differences-3192eae03850
 * https://github.com/mingyuchoo/todo-list-react-ts/blob/master/src/App.tsx
 * https://github.com/mingyuchoo/react-todo-2019/blob/master/src/components/ToDo.js
 */
interface NewTaskFormProps {
  task: Task;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewTaskForm: React.FC<NewTaskFormProps> = (
  props: NewTaskFormProps
): ReactElement => {
  return (
    <form onSubmit={props.onSubmit}>
      <input onChange={props.onChange} value={props.task.title} />
      <button type="submit">Add a task</button>
    </form>
  );
};

interface TasksListItemProps {
  task: Task;
  onDelete: (task: Task) => void;
}

const TaskListItem: React.FC<TasksListItemProps> = (
  props: TasksListItemProps
): ReactElement => {
  const onClick = (): void => {
    props.onDelete(props.task);
  };

  return (
    <li>
      {props.task.title} <button onClick={onClick}>X</button>
    </li>
  );
};

interface TaskListProps {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

const TasksList: React.FC<TaskListProps> = (
  props: TaskListProps
): ReactElement => {
  return (
    <ul>
      {props.tasks.map(task => (
        <TaskListItem key={task.id} task={task} onDelete={props.onDelete} />
      ))}
    </ul>
  );
};

interface Task {
  id: number;
  title: string;
}

interface State {
  newTask: Task;
  tasks: Task[];
}

const TaskApp: React.FC = (): ReactElement => {
  const [newTask, setNewTask] = useState({ id: 0, title: '' });
  const [tasks, setTasks] = useState([
    { id: 1, title: 'clean the house' },
    { id: 2, title: 'buy milk' },
  ]);

  const generateId = (): number => {
    if (tasks && tasks.length > 1) {
      return Math.max(...tasks.map(task => task.id)) + 1;
    } else {
      return 1;
    }
  };

  const modifyTask = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewTask({ ...newTask, title: event.target.value });
  };

  const saveTask = (event: FormEvent<HTMLFormElement>): void => {
    const newId = generateId();
    setNewTask({ id: newId, ...newTask });
    setTasks([newTask, ...tasks]);
  };

  const removeTask = (taskToDelete: Task): void => {
    setTasks(tasks.filter(task => task.id !== taskToDelete.id));
  };

  return (
    <div>
      <h2>Hello React TS!</h2>
      <NewTaskForm task={newTask} onChange={modifyTask} onSubmit={saveTask} />
      <TasksList tasks={tasks} onDelete={removeTask} />
    </div>
  );
};

export default TaskApp;
