import type { Calculator } from '../models/calculatorButtons';
import Input from './Input';

interface GridInterface {
  calculatorButtons: Calculator[];
  handleCurrent: (value: string) => void;
}
function Grid({ calculatorButtons, handleCurrent }: GridInterface) {
  return (
    <div className="grid grid-cols-4 gap-1">
      {calculatorButtons.map((button) => {
        if (button == '0') {
          return (
            <Input
              handleCurrent={handleCurrent}
              key={crypto.randomUUID()}
              style="bg-gray-300 text-black text-xl font-medium h-16 rounded cursor-pointer hover:bg-gray-400 transition-colors col-span-2"
              value="0"
            ></Input>
          );
        }

        if (/^[\d.]$/.test(button)) {
          return (
            <Input
              handleCurrent={handleCurrent}
              key={crypto.randomUUID()}
              value={button}
              style="bg-gray-300 text-black text-xl font-medium h-16 rounded cursor-pointer hover:bg-gray-400 transition-colors"
            />
          );
        }

        return (
          <Input
            handleCurrent={handleCurrent}
            key={crypto.randomUUID()}
            value={button}
            style="bg-orange-500 text-white text-xl font-medium h-16 rounded cursor-pointer hover:bg-orange-600 transition-colors"
          />
        );
      })}
    </div>
  );
}

export default Grid;
