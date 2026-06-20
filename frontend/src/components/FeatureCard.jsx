function FeatureCard({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;