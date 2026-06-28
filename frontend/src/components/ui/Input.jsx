/**
 * Input Component
 *
 * Props:
 * label : input label
 * placeholder : placeholder text
 * type : text, email, password, etc.
 * name : input field name
 * value : input value
 * onChange : change handler
 * error : error message
 */

export default function Input({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 outline-none focus:border-purple-600 bg-white dark:bg-gray-700 dark:text-white"
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}