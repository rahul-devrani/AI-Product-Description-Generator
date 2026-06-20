import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Modal, Button } from "../components/ui";

function About({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-grow bg-gray-50 dark:bg-gray-950">
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-8">
              About ProDescription AI
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-8 mb-6">
              ProDescription AI is an AI-powered platform designed to help
              businesses create professional product descriptions for
              e-commerce platforms.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-8 mb-6">
              Many small businesses struggle to create engaging product
              listings due to limited marketing resources. This platform
              simplifies the process by generating high-quality descriptions,
              titles, taglines, SEO keywords, and social media content within
              seconds.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-8 mb-12">
              The goal is to improve product visibility, save time, and help
              businesses build a stronger online presence through AI-assisted
              content generation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  Product Descriptions
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  Generate detailed and engaging product descriptions in
                  seconds.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  SEO Keywords
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  Improve search visibility with optimized keyword suggestions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  Social Media Captions
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  Create promotional content ready for social platforms.
                </p>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Technology Stack
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                  <h3 className="font-semibold mb-2">
                    Frontend
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    React.js
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                  <h3 className="font-semibold mb-2">
                    Backend
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    FastAPI
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                  <h3 className="font-semibold mb-2">
                    Database
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    MongoDB Atlas
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                  <h3 className="font-semibold mb-2">
                    AI API
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    Google Gemini
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Future Enhancements
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                  User Authentication
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                  Content History
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                  Export & Download
                </div>
              </div>
            </section>

            <Button
              variant="primary"
              size="md"
              onClick={() => setOpen(true)}
            >
              Learn More
            </Button>

            <Modal
              isOpen={open}
              onClose={() => setOpen(false)}
              title="About This Project"
            >
              <p className="text-gray-600 leading-7">
                ProDescription AI is being developed as part of the
                TBI-GEU AI-Assisted Full Stack Development Internship
                Program. The platform aims to help businesses generate
                product descriptions, titles, taglines, SEO keywords,
                and social media captions using AI-powered tools.
              </p>
            </Modal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;