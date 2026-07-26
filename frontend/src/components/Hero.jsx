import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "../assets/hero-banner.png";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300/30 dark:bg-purple-700/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-pink-300/30 dark:bg-pink-700/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            AI Powered Content Generation
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-6 leading-tight tracking-tight">
            Generate Professional
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Product Descriptions
            </span>
            For E-Commerce
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mt-6 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
            Create product descriptions, SEO keywords, titles, taglines and
            social media captions within seconds using AI-powered content
            generation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              onClick={() => navigate("/generate")}
              className="group inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-purple-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Generate Now
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => navigate("/about")}
              className="inline-flex items-center justify-center gap-2 border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 px-6 py-3 rounded-xl font-medium hover:bg-purple-50 dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
            >
              Learn More
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
            {[
              "Product Descriptions",
              "SEO Keywords",
              "Product Titles",
              "Product Taglines",
              "Social Media Captions",
            ].map((item) => (
              <span
                key={item}
                className="bg-white dark:bg-gray-800 border dark:border-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-4 lg:mt-0">
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-[2rem] blur-2xl" />
          <img
            src={heroImage}
            alt="ProDescription AI"
            className="relative w-full rounded-2xl sm:rounded-3xl shadow-2xl ring-1 ring-black/5"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;