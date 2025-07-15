import React, { useEffect, useState } from 'react';
import type TodoItem from './models/todoItem';
import Header from './components/header';
import Form from './components/form';
import List from './components/list';
import { Toaster, toast } from 'sonner';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(function () {
    const value = localStorage.getItem('todos');
    return value ? JSON.parse(value) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  function handleAddItem(item: TodoItem) {
    setTodos([...todos, item]);

    toast.success('Task created successfully');
  }

  function handleDeleteItem(id: string) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

    toast.success('Task deleted successfully');
  }

  function handleUpdateItem(id: string) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      })
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <Toaster richColors position="top-right" />
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <Header></Header>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <Form addItem={handleAddItem}></Form>
          <List
            todos={todos}
            onDelete={handleDeleteItem}
            onUpdate={handleUpdateItem}
          ></List>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
