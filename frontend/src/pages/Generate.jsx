import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Button,
  Input,
  Loader,
} from "../components/ui";

import {
  generateProduct,
} from "../api/api";

function Generate({ darkMode, setDarkMode }) {

  const [formData, setFormData] = useState({
    product_name: "",
    ingredients: "",
    weight: "",
    key_features: "",
    tone: "Premium",
  });

  const [generatedData, setGeneratedData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleReset = () => {

    setFormData({
      product_name: "",
      ingredients: "",
      weight: "",
      key_features: "",
      tone: "Premium",
    });

    setGeneratedData(null);

    setError("");

  };



  const handleGenerate = async () => {

    if (
      !formData.product_name ||
      !formData.ingredients ||
      !formData.weight ||
      !formData.key_features
    ) {

      setError("Please fill all the fields.");

      return;

    }

    setLoading(true);

    setError("");

    setGeneratedData(null);

    try {

      const response = await generateProduct(formData);

      setGeneratedData(response);

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

    }

    catch (err) {

      console.error(err);

      setError("Failed to generate content. Please try again.");

    }

    finally {

      setLoading(false);

    }

  };



  return (

    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-grow bg-gray-50 dark:bg-gray-950">

        <section className="py-16">

          <div className="max-w-6xl mx-auto px-6">

            <h1 className="text-4xl font-bold mb-3">

              AI Product Description Generator

            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-10">

              Generate product descriptions, titles, taglines,
              SEO keywords and social media captions instantly.

            </p>



            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

              <div className="grid gap-6">

                <Input
                  label="Product Name"
                  name="product_name"
                  value={formData.product_name}
                  onChange={handleChange}
                  placeholder="Organic Honey"
                />

                <Input
                  label="Ingredients"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  placeholder="Pure Honey"
                />

                <Input
                  label="Weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="500g"
                />

                <Input
                  label="Key Features"
                  name="key_features"
                  value={formData.key_features}
                  onChange={handleChange}
                  placeholder="Natural, No Added Sugar"
                />

                <div>

                  <label className="block mb-2 font-medium">

                    Tone

                  </label>

                  <select
                    name="tone"
                    value={formData.tone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700"
                  >

                    <option value="Premium">
                      Premium
                    </option>

                    <option value="Traditional">
                      Traditional
                    </option>

                    <option value="Health Focused">
                      Health Focused
                    </option>

                  </select>

                </div>

                <div className="flex gap-4">

                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleGenerate}
                    disabled={loading}
                  >

                    {loading ? "Generating..." : "Generate Content"}

                  </Button>

                  <Button
                    variant="secondary"
                    size="md"
                    onClick={handleReset}
                  >

                    Reset

                  </Button>

                </div>

                {loading && (

                  <div className="flex justify-center">

                    <Loader />

                  </div>

                )}

                {error && (

                  <div className="text-red-500 font-medium">

                    {error}

                  </div>

                )}

              </div>

            </div>

            {generatedData && (

              <div className="mt-12 grid gap-6">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    Product Description
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-7">
                    {generatedData.description}
                  </p>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    Product Title
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    {generatedData.title}
                  </p>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    Product Tagline
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    {generatedData.tagline}
                  </p>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    SEO Keywords
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {generatedData.seo_keywords.map((keyword, index) => (

                      <span
                        key={index}
                        className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm"
                      >
                        {keyword}
                      </span>

                    ))}

                  </div>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    Social Media Caption
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-7">
                    {generatedData.social_caption}
                  </p>

                </div>

              </div>

            )}

          </div>

        </section>

      </main>

      <Footer />

    </div>

  );

}

export default Generate;