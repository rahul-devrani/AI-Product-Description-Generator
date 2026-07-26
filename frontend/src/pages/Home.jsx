import { useNavigate } from "react-router-dom";
import {
  FileText,
  Wand2,
  Share2,
  Search,
  Tag,
  MessageSquareText,
  Sparkles,
  ShieldCheck,
  Zap,
  MousePointerClick,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

function Home({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const howItWorks = [
    {
      icon: FileText,
      title: "Enter Product Details",
      description:
        "Add product name, ingredients, weight and key product information.",
    },
    {
      icon: Wand2,
      title: "Generate Content",
      description:
        "AI instantly creates descriptions, titles, taglines and SEO content.",
    },
    {
      icon: Share2,
      title: "Publish Anywhere",
      description:
        "Copy and use the generated content on websites, marketplaces and social media platforms.",
    },
  ];

  const platformHighlights = [
    {
      icon: FileText,
      title: "Product Descriptions",
      description: "Generate detailed and engaging descriptions.",
    },
    {
      icon: Search,
      title: "SEO Keywords",
      description: "Improve product visibility with keyword suggestions.",
    },
    {
      icon: Tag,
      title: "Product Titles",
      description: "Create professional and market-ready titles.",
    },
    {
      icon: MessageSquareText,
      title: "Social Captions",
      description: "Generate promotional content for social platforms.",
    },
  ];

  const trustedFeatures = [
    {
      icon: Sparkles,
      title: "AI Powered",
      description: "Advanced AI models trained to write like a pro.",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Keywords built in so your products get found faster.",
    },
    {
      icon: Zap,
      title: "Fast Generation",
      description: "Get complete content in seconds, not hours.",
    },
    {
      icon: ShieldCheck,
      title: "Secure",
      description: "Your data and content stay protected end-to-end.",
    },
    {
      icon: MousePointerClick,
      title: "Easy to Use",
      description: "No learning curve, just enter details and generate.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white overflow-x-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow">
        <Hero />

        <WhyChooseUs />

        <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
              How It Works
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
              Generate professional product content in three simple steps.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {howItWorks.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="group relative bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-semibold text-purple-400 dark:text-purple-500">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    {title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-6">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
              Platform Highlights
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
              Everything you need to create high-quality product content.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {platformHighlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold mb-2 text-sm sm:text-base">
                    {title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-5">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
              Why Businesses Choose Us
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
              A platform built to be fast, reliable and effortless to use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {trustedFeatures.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-purple-200 dark:hover:border-purple-800"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold mb-2 text-sm sm:text-base">
                    {title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-5">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 px-6 sm:px-10 lg:px-16 py-14 sm:py-16 text-center">
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute -top-16 -left-16 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
                  Ready to Generate Professional Product Content?
                </h2>

                <p className="text-purple-100 text-sm sm:text-base md:text-lg mb-8 max-w-xl mx-auto">
                  Generate AI-powered descriptions, SEO keywords, titles and
                  captions in seconds.
                </p>

                <button
                  onClick={() => navigate("/generate")}
                  className="group inline-flex items-center gap-2 bg-white text-purple-700 px-7 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Generate Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
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