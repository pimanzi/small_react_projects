import type TodoItem from '@/models/todoItem';
import { Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: TodoItem;
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
}
export default function Item({ todo, onDelete, onUpdate }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 mb-3">
      <div className="flex items-center space-x-3">
        <input
          checked={todo.completed}
          onChange={() => onUpdate(todo.id)}
          type="checkbox"
          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <span
          className={`text-gray-700 ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
