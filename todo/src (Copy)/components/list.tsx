import type TodoItem from '@/models/todoItem';
import Item from './todoItem';

interface TodoItemProps {
  todos: TodoItem[];
  onDelete: (id: string) => void;
  onUpdate: (id: string) => void;
}
function List({ todos, onDelete, onUpdate }: TodoItemProps) {
  return (
    <div className="space-y-3">
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <Item
            onDelete={onDelete}
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
          ></Item>
        ))
      ) : (
        <p className="text-gray-500 text-2xl text-center">
          Plan it. Do it. Start now.
        </p>
      )}
    </div>
  );
}

export default List;
