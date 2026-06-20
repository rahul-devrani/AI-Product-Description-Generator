import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

function Home({ darkMode, setDarkMode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-grow">
        <Hero />

        <WhyChooseUs />

        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              How It Works
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
              Generate professional product content in three simple steps.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Enter Product Details
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  Add product name, ingredients, weight and key product
                  information.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Generate Content
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  AI instantly creates descriptions, titles, taglines and SEO
                  content.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Publish Anywhere
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  Copy and use the generated content on websites,
                  marketplaces and social media platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
              Platform Highlights
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
              Everything you need to create high-quality product content.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold mb-2">
                  Product Descriptions
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Generate detailed and engaging descriptions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold mb-2">
                  SEO Keywords
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Improve product visibility with keyword suggestions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold mb-2">
                  Product Titles
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Create professional and market-ready titles.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold mb-2">
                  Social Captions
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Generate promotional content for social platforms.
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

export default Home;