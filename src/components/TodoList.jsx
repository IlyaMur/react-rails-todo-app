import React, { useEffect, useState, useCallback } from 'react';
import { Tabs, Layout, Row, Col, Input, message } from 'antd';
import './TodoList.css';
import TodoTab from './TodoTab';
import TodoForm from './TodoForm';
import {
  createTodo,
  deleteTodo,
  loadTodos,
  updateTodo,
} from '../services/todoService';

const { TabPane } = Tabs;
const { Content } = Layout;

const TodoList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [todos, setTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState();

  const handleFormSubmit = (todo) => {
    console.log('Todo to create', todo);
    createTodo(todo).then(onRefresh());
    message.success('Дело добавлено!');
  };

  const handleRemoveTodo = (todo) => {
    deleteTodo(todo.id).then(onRefresh());
    message.warn('Дело удалено');
  };

  const handeToggleStatus = (todo) => {
    todo.completed = !todo.completed;
    updateTodo(todo).then(onRefresh());
    message.info('Статус обновлен!');
  };

  const refrsh = () => {};

  const onRefresh = useCallback;
};

export default TodoList;
