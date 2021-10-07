import React, { useEffect, useState, useCallback } from 'react';
import { Tabs, Layout, Row, Col, Input, message } from 'antd';
import './TodoList.css';
import TodoTab from './TodoTab';
import TodoForm from './TodoForm';
import {
  createTodo,
  deleteTodos,
  loadTodos,
  updateTodo,
} from '../services/todoService';
import Todotab from './TodoTab';

const { TabPane } = Tabs;
const { Content } = Layout;

const TodoList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [todos, setTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleFormSubmit = (todo) => {
    console.log('Todo to create', todo);
    createTodo(todo).then(onRefresh());
    message.success('Дело добавлено!');
  };

  const handleRemoveTodo = (todo) => {
    deleteTodos(todo.id).then(onRefresh());
    message.warn('Дело удалено');
  };

  const handeToggleStatus = (todo) => {
    todo.completed = !todo.completed;
    updateTodo(todo).then(onRefresh());
    message.info('Статус обновлен!');
  };

  const refresh = () => {
    loadTodos()
      .then((json) => {
        setTodos(json);
        setActiveTodos(json.filter((todo) => todo.completed === false));
        setCompletedTodos(json.filter((todo) => todo.completed === true));
      })
      .then(console.log('Список загружен'));
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    let data = await loadTodos();

    setTodos(data);
    setActiveTodos(data.filter((todo) => todo.completed === false));
    setCompletedTodos(data.filter((todo) => todo.completed === true));
    setRefreshing(false);
    console.log('Refresh state', refreshing);
  }, [refreshing]);

  useEffect(() => {
    refresh();
  }, [onRefresh]);

  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <div className="todolist">
          <Row>
            <Col span={14} offset={5}>
              <h1>Список дел</h1>
              <TodoForm onFormSubmit={handleFormSubmit} />
              <br />
              <Tabs defaultActiveKey="all">
                <TabPane tab="Все" key="all">
                  <Todotab
                    todos={todos}
                    onTodoToggle={handeToggleStatus}
                    onTodoRemoval={handleRemoveTodo}
                  />
                </TabPane>
                <TabPane tab="Активные" key="active">
                  <Todotab
                    todos={activeTodos}
                    onTodoToggle={handeToggleStatus}
                    onTodoRemoval={handleRemoveTodo}
                  />
                </TabPane>
                <TabPane tab="Завершённые" key="complete">
                  <Todotab
                    todos={completedTodos}
                    onTodoToggle={handeToggleStatus}
                    onTodoRemoval={handleRemoveTodo}
                  />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};
export default TodoList;
