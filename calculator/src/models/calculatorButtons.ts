export const calculatorButtonsType = [
  'AC',
  'DEL',
  '%',
  '÷',
  '7',
  '8',
  '9',
  '×',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
] as const;

export const calculatorButtons = calculatorButtonsType.slice();

export type Calculator = (typeof calculatorButtonsType)[number];
