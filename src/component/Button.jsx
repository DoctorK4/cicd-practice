export const Button = ({children, type, disabled, onClick}) => {
  return (
    <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    >
      {children}
    </button>
  );
};