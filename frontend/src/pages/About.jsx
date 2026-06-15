import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow">

        <section className="py-20">

          <div className="max-w-5xl mx-auto px-6">

            <h1 className="text-5xl font-bold mb-8">
              About ProDescription AI
            </h1>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              ProDescription AI is an AI-powered platform designed to help
              businesses create professional product descriptions for
              e-commerce platforms.
            </p>

            <p className="text-lg text-gray-600 leading-8 mb-6">
              Many small businesses struggle to create engaging product
              listings due to limited marketing resources. This platform
              simplifies the process by generating high-quality descriptions,
              titles and content suggestions within seconds.
            </p>

            <p className="text-lg text-gray-600 leading-8">
              The goal is to improve product visibility, save time and help
              businesses build a stronger online presence through AI-assisted
              content generation.
            </p>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default About;