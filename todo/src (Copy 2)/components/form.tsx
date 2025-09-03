import { useTasksContext } from '@/context/TasksProvider';
import type TodoItem from '@/models/todoItem';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

function Form() {
  const { todos, setTodos } = useTasksContext();
  const [task, setTask] = useState<string>('');

  function handleAddItem(item: TodoItem) {
    setTodos([...todos, item]);

    toast.success('Task created successfully');
  }

  function add(text: string, e: React.FormEvent) {
    e.preventDefault();
    if (!text) return;
    const result = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };

    handleAddItem(result);
    setTask('');
  }
  return (
    <div>
      <div className="mb-6">
        <form className="relative" onSubmit={(e) => add(task, e)}>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Add todo..."
            className="text-lg  w-full p-4 pr-12 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
            <Plus size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
