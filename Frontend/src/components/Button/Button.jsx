import "./Button.css";

function Button({ className, disabled, style, onClick, children }) {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
