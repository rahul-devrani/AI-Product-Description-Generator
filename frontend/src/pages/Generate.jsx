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
  const [success, setSuccess] = useState("");

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
    setSuccess("");
  };

  const handleGenerate = async () => {

    if (!formData.product_name.trim()) {
      setError("Product name is required.");
      return;
    }

    if (formData.product_name.trim().length < 3) {
      setError("Product name must be at least 3 characters.");
      return;
    }

    if (!formData.ingredients.trim()) {
      setError("Ingredients are required.");
      return;
    }

    if (formData.ingredients.trim().length < 3) {
      setError("Ingredients must be at least 3 characters.");
      return;
    }

    if (!formData.weight.trim()) {
      setError("Weight is required.");
      return;
    }

    if (!formData.key_features.trim()) {
      setError("Key features are required.");
      return;
    }

    if (formData.key_features.trim().length < 5) {
      setError("Key features must be at least 5 characters.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");
    setGeneratedData(null);

    try {

      const response = await generateProduct(formData);

      setGeneratedData(response);
      setSuccess("Product generated successfully.");

      setTimeout(() => {
        setSuccess("");
      }, 3000);

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

    }

    catch (err) {

      console.error(err);

      if (err.response?.status === 429) {
        setError("Gemini API quota exceeded. Please try again in a while.");
      }

      else if (err.response?.status === 500) {
        setError("Server error. Please try again in a moment.");
      }

      else if (err.response?.status === 401) {
        setError("Session expired. Please log in again.");
      }

      else if (err.response?.status === 400) {
        setError("Invalid input. Please check your details and try again.");
      }

      else if (err.response?.data?.detail) {

        if (Array.isArray(err.response.data.detail)) {

          const message = err.response.data.detail
            .map((item) => item.msg)
            .join(", ");

          setError(message);

        }

        else {
          setError(err.response.data.detail);
        }

      }

      else if (err.code === "ERR_NETWORK") {
        setError("Network error. Please check your internet connection.");
      }

      else {
        setError("Unable to generate content. Please try again.");
      }

    }

    finally {
      setLoading(false);
    }

  };

  const handleCopy = async (text) => {

    setError("");

    try {
      await navigator.clipboard.writeText(text);
      setSuccess("Copied to clipboard ✓");

      setTimeout(() => {
        setSuccess("");
      }, 2000);
    } catch {
      setError("Unable to copy.");
    }

  };

  const handleDownload = () => {

    if (!generatedData) return;

    const content = `
Title:
${generatedData.title}

Description:
${generatedData.description}

Tagline:
${generatedData.tagline}

SEO Keywords:
${generatedData.seo_keywords.join(", ")}

Social Caption:
${generatedData.social_caption}
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${generatedData.title}.txt`;
    link.click();

    window.URL.revokeObjectURL(url);

  };

  return (

    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow bg-gray-50 dark:bg-gray-950">

        <section className="py-16">

          <div className="max-w-6xl mx-auto px-6">

            <h1 className="text-4xl font-bold mb-3">
              AI Product Description Generator
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-10">
              Generate product descriptions, titles, taglines,
              SEO keywords and social captions instantly.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

              <div className="grid gap-6">

                <Input
                  label="Product Name"
                  name="product_name"
                  value={formData.product_name}
                  onChange={handleChange}
                  placeholder="Organic Honey"
                  disabled={loading}
                />

                <Input
                  label="Ingredients"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  placeholder="Pure Honey"
                  disabled={loading}
                />

                <Input
                  label="Weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="500g"
                  disabled={loading}
                />

                <Input
                  label="Key Features"
                  name="key_features"
                  value={formData.key_features}
                  onChange={handleChange}
                  placeholder="Natural, No Added Sugar"
                  disabled={loading}
                />

                <div>
                  <label className="block mb-2 font-medium">
                    Tone
                  </label>

                  <select
                    name="tone"
                    value={formData.tone}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700"
                  >
                    <option value="Premium">Premium</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Healthy">Healthy</option>
                  </select>
                </div>

                {error && (
                  <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg">
                    {success}
                  </div>
                )}

                <div className="flex gap-4">

                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleGenerate}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader />
                        Generating AI Content...
                      </>
                    ) : (
                      "Generate Content"
                    )}
                  </Button>

                  <Button
                    variant="secondary"
                    size="md"
                    onClick={handleReset}
                    disabled={loading}
                  >
                    Reset
                  </Button>

                </div>

              </div>

            </div>

            {loading && (
              <div className="mt-10 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center">

                <Loader />

                <p className="mt-4 text-lg font-semibold">
                  🤖 AI is generating your content...
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  This usually takes 2–5 seconds.
                </p>

              </div>
            )}

            {!loading && generatedData && (
              <div className="flex items-center justify-between mt-12 mb-6">
                <h2 className="text-3xl font-bold">
                  Generated Content
                </h2>

                <div className="text-sm text-gray-500">
                  Generated using Gemini AI
                </div>
              </div>
            )}

            {!loading && generatedData && (

              <div className="mt-2 grid gap-6">

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700">

                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-500">
                      Product Title
                    </h3>

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleCopy(generatedData.title)}
                    >
                      Copy
                    </Button>
                  </div>

                  <p className="text-3xl font-bold text-indigo-600">
                    {generatedData.title}
                  </p>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700">

                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-500">
                      Tagline
                    </h3>

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleCopy(generatedData.tagline)}
                    >
                      Copy
                    </Button>
                  </div>

                  <p className="italic text-xl text-gray-700 dark:text-gray-300">
                    "{generatedData.tagline}"
                  </p>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                  <div className="flex justify-between items-center mb-4">

                    <h3 className="text-xl font-semibold">
                      Product Description
                    </h3>

                    <div className="flex gap-3">

                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleCopy(generatedData.description)}
                      >
                        Copy
                      </Button>

                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleDownload}
                      >
                        📥 Download
                      </Button>

                    </div>

                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-8 text-[16px]">
                    {generatedData.description}
                  </p>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold">
                      SEO Keywords
                    </h3>

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() =>
                        handleCopy(generatedData.seo_keywords.join(", "))
                      }
                    >
                      Copy
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-3">

                    {generatedData.seo_keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="
                          bg-blue-100
                          dark:bg-blue-900
                          text-blue-700
                          dark:text-blue-300
                          px-4
                          py-2
                          rounded-full
                          font-medium
                          text-sm
                        "
                      >
                        {keyword}
                      </span>
                    ))}

                  </div>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold">
                      Social Media Caption
                    </h3>

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleCopy(generatedData.social_caption)}
                    >
                      Copy
                    </Button>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border">
                    <p className="leading-7">
                      {generatedData.social_caption}
                    </p>
                  </div>

                </div>

                <div className="flex justify-center mt-4">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleGenerate}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader />
                        Generating New Version...
                      </>
                    ) : (
                      "Regenerate Content"
                    )}
                  </Button>
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