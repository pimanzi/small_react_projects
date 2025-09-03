import Header from './components/header';
import Form from './components/form';
import List from './components/list';
import { Toaster } from 'sonner';

const TodoApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <Toaster richColors position="top-right" />
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <Header></Header>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <Form></Form>
          <List></List>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
