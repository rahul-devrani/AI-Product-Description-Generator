import FeatureCard from "./FeatureCard";

function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          What Can ProDescription AI Generate?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Everything required to create professional and engaging product listings.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <FeatureCard
            title="Product Descriptions"
            description="Generate detailed and engaging product descriptions for e-commerce platforms."
          />

          <FeatureCard
            title="SEO Keywords"
            description="Get relevant search-friendly keywords to improve product visibility."
          />

          <FeatureCard
            title="Titles & Taglines"
            description="Generate attractive product titles and memorable taglines."
          />

          <FeatureCard
            title="Social Media Captions"
            description="Create promotional captions for Instagram, Facebook and other platforms."
          />

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;