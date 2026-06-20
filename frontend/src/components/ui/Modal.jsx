import { useEffect } from "react";

/**
 * Modal Component
 *
 * Props:
 * isOpen : controls modal visibility
 * onClose : closes the modal
 * title : modal heading
 * children : modal content
 */

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-lg w-full p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-black dark:text-white text-2xl font-bold hover:text-red-500"
          >
            ×
          </button>
        </div>

        <div className="text-gray-700 dark:text-gray-300 leading-7">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;