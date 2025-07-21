interface inputProps {
  style: string;
  handleCurrent: (value: string) => void;
  value: string;
}
function Input({ style, value, handleCurrent }: inputProps) {
  return (
    <input
      onClick={() => handleCurrent(value)}
      type="button"
      value={value}
      className={style}
    />
  );
}

export default Input;
