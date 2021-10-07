import React, { useEffect } from 'react';
import { Tabs, Layout, Row, Column, List } from 'antd';
import TodoItem from './TodoItem';

const Todotab = ({ todos, onTodoRemoval, onTodoToggle }) => {
  return (
    <>
      <List
        locale={{ emptyText: 'Здесь пусто :(' }}
        dataSource={todos}
        renderItem={(todo) => {
          <TodoItem
            todo={todo}
            onTodoToggle={onTodoToggle}
            onTodoRemoval={onTodoRemoval}
          />;
        }}
        pagination={{
          position: 'bottom',
          pageSize: 10,
        }}
      />
    </>
  );
};

export default TodoTab;
