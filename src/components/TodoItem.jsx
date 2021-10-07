import React, { useState } from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const Todo = (todo, onTodoRemoval, onTodoToggle) => {
  return (
    <List.Item>
      <div className="todo-item">
        <Tag color={todo.completed ? 'cyan' : 'red'} className="todo-tag">
          {todo.title}
        </Tag>
      </div>
    </List.Item>
  );
};

export default Todo;
