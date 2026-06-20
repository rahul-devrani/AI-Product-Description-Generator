export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-lg font-medium transition ${variants[variant]} ${sizes[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}