export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">{label}</label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}