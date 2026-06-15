import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main>
        <Hero />

        <WhyChooseUs />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-4">
              How It Works
            </h2>

            <p className="text-center text-gray-600 mb-12">
              Generate professional product content in three simple steps.
            </p>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Enter Product Details
                </h3>

                <p className="text-gray-600">
                  Add product name, ingredients, weight and key features.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Generate Content
                </h3>

                <p className="text-gray-600">
                  AI creates product descriptions, titles and marketing copy.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Publish Anywhere
                </h3>

                <p className="text-gray-600">
                  Copy the content and use it across marketplaces and websites.
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