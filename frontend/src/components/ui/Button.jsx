/**
 * Button Component
 *
 * Props:
 * children : button text/content
 * variant : primary, secondary, outline, danger, success, warning
 * size : sm, md, lg
 * disabled : true or false
 * type : button, submit, reset
 * onClick : click handler
 * className : additional custom classes
 */

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  onClick,
  className = "",
}) {

  const variants = {

    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300",

    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300",

    outline:
      "border border-gray-400 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-200",

    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-4 focus:ring-red-300",

    success:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-300",

    warning:
      "bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300",

  };



  const sizes = {

    sm:
      "px-3 py-2 text-sm",

    md:
      "px-5 py-2.5 text-base",

    lg:
      "px-6 py-3 text-lg",

  };



  return (

    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`

        inline-flex
        items-center
        justify-center
        rounded-lg
        font-medium
        transition-all
        duration-200
        ease-in-out
        shadow-sm

        hover:scale-105
        active:scale-95

        focus:outline-none

        ${variants[variant]}
        ${sizes[size]}
        ${className}

        ${
          disabled
            ? "opacity-50 cursor-not-allowed hover:scale-100"
            : "cursor-pointer"
        }

      `}
    >

      {children}

    </button>

  );

}