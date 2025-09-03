import Item from './todoItem';
import { useTasksContext } from '@/context/TasksProvider';

function List() {
  const { todos } = useTasksContext();
  return (
    <div className="space-y-3">
      {todos.length !== 0 ? (
        todos.map((todo) => <Item key={todo.id} todo={todo}></Item>)
      ) : (
        <p className="text-gray-500 text-2xl text-center">
          Plan it. Do it. Start now.
        </p>
      )}
    </div>
  );
}

export default List;
