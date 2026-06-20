export default function Loader({ size = "h-10 w-10" }) {
  return (
    <div
      className={`${size} border-4 border-blue-500 border-t-transparent rounded-full animate-spin`}
    />
  );
}