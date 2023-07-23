export const Button = ({ type, disabled, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};