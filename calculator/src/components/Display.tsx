interface DisplayInterface {
  displayValue: string;
}
function Display({ displayValue }: DisplayInterface) {
  return (
    <div className="bg-gray-600 text-white text-right text-4xl font-light p-4 mb-4">
      {displayValue.length == 0 ? '0' : displayValue}
    </div>
  );
}

export default Display;
