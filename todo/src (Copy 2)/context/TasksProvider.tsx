import type TodoItem from '@/models/todoItem';
import { createContext, useContext, useEffect, useState } from 'react';

interface TasksContext {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}
export const TasksContext = createContext<TasksContext | undefined>(undefined);

export default function TasksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<TodoItem[]>(function () {
    const value = localStorage.getItem('todos');
    return value ? JSON.parse(value) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TasksContext.Provider value={{ todos, setTodos }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasksContext() {
  const value = useContext(TasksContext);

  if (value === undefined) {
    throw new Error('useTasks context should be used inside TasksContext');
  }

  return value;
}
