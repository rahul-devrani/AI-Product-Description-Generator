import heroImage from "../assets/hero-banner.png";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-purple-50 via-white to-white py-20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
            AI Powered Content Generation
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-6 leading-tight">
            Generate Professional
            <span className="block text-purple-600">
              Product Descriptions
            </span>
            For E-Commerce
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Create product descriptions, SEO keywords, titles,
            taglines and social media captions within seconds
            using AI-powered content generation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition">
              Generate Content
            </button>

            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-50 transition">
              Learn More
            </button>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            <span className="bg-white border px-4 py-2 rounded-full text-sm shadow-sm">
              Product Descriptions
            </span>

            <span className="bg-white border px-4 py-2 rounded-full text-sm shadow-sm">
              SEO Keywords
            </span>

            <span className="bg-white border px-4 py-2 rounded-full text-sm shadow-sm">
              Product Titles
            </span>

            <span className="bg-white border px-4 py-2 rounded-full text-sm shadow-sm">
              Product Taglines
            </span>

            <span className="bg-white border px-4 py-2 rounded-full text-sm shadow-sm">
              Social Media Captions
            </span>

          </div>

        </div>

        <div>
          <img
            src={heroImage}
            alt="ProDescription AI"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;