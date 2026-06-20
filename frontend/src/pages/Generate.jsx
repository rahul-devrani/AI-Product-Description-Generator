import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Input, Button, Loader } from "../components/ui";

function Generate({ darkMode, setDarkMode }) {
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-grow bg-gray-50 dark:bg-gray-950">
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-3">
              AI Content Generator
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-10">
              Generate product descriptions, titles, taglines, SEO keywords,
              and social media captions using AI.
            </p>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
              <div className="grid gap-6">
                <Input
                  label="Product Name"
                  placeholder="Enter product name"
                />

                <Input
                  label="Ingredients"
                  placeholder="Enter ingredients"
                />

                <Input
                  label="Weight"
                  placeholder="500g"
                />

                <div>
                  <label className="block mb-2 font-medium">
                    Tone
                  </label>

                  <select className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700">
                    <option>Premium</option>
                    <option>Traditional</option>
                    <option>Health Focused</option>
                  </select>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={handleGenerate}
                >
                  Generate Content
                </Button>

                {loading && (
                  <div className="flex justify-center pt-4">
                    <Loader />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 grid gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold mb-2">
                  Product Description
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  AI generated product description will appear here.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold mb-2">
                  Product Title
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  AI generated product title will appear here.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold mb-2">
                  Product Tagline
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  AI generated product tagline will appear here.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold mb-2">
                  SEO Keywords
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  Suggested SEO keywords will appear here.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold mb-2">
                  Social Media Caption
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  AI generated promotional caption will appear here.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Generate;