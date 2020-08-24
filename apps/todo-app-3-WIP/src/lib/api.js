import axios from 'axios';

export const getUsers = () => axios.get('/data/todo.json');
