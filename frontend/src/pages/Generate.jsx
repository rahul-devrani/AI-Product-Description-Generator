import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Generate() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow bg-gray-50">

        <section className="py-16">

          <div className="max-w-5xl mx-auto px-6">

            <h1 className="text-4xl font-bold mb-10">
              AI Content Generator
            </h1>

            <form className="bg-white shadow-lg rounded-2xl p-8">

              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Product Name
                </label>

                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Ingredients
                </label>

                <textarea
                  rows="4"
                  placeholder="Enter ingredients"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Weight
                </label>

                <input
                  type="text"
                  placeholder="500g"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Tone
                </label>

                <select className="w-full border rounded-xl px-4 py-3">
                  <option>Premium</option>
                  <option>Traditional</option>
                  <option>Health Focused</option>
                </select>
              </div>

              <button
                type="button"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl"
              >
                Generate Content
              </button>

            </form>

            <div className="mt-12 grid gap-6">

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold mb-2">
                  Product Description
                </h3>

                <p className="text-gray-600">
                  AI generated product description will appear here.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold mb-2">
                  Product Title
                </h3>

                <p className="text-gray-600">
                  AI generated product title will appear here.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold mb-2">
                  Product Tagline
                </h3>

                <p className="text-gray-600">
                  AI generated tagline will appear here.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold mb-2">
                  SEO Keywords
                </h3>

                <p className="text-gray-600">
                  Suggested SEO keywords will appear here.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <h3 className="font-semibold mb-2">
                  Social Media Caption
                </h3>

                <p className="text-gray-600">
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