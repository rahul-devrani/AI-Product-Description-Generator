import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Modal, Button } from "../components/ui";
import {
  Sparkles,
  Target,
  Rocket,
  FileText,
  Tag,
  Search,
  MessageSquareText,
  Zap,
  ShieldCheck,
  Code2,
  Database,
  BrainCircuit,
  KeyRound,
  Paintbrush,
  Store,
  Building2,
  ShoppingCart,
  Megaphone,
  Globe,
  FileDown,
  Users,
  History,
  BarChart3,
  Share2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function About({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  
  const features = [
    {
      icon: FileText,
      title: "AI Product Descriptions",
      description:
        "Generate detailed and engaging product descriptions in seconds.",
    },
    {
      icon: Tag,
      title: "Product Titles",
      description:
        "Create professional, market-ready titles that stand out.",
    },
    {
      icon: Search,
      title: "SEO Keywords",
      description:
        "Improve search visibility with optimized keyword suggestions.",
    },
    {
      icon: MessageSquareText,
      title: "Social Captions",
      description:
        "Create promotional content ready for social platforms.",
    },
    {
      icon: Zap,
      title: "Fast Generation",
      description:
        "Get complete, polished content in seconds, not hours.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      description:
        "Your account and content are protected end-to-end.",
    },
  ];

  
  const techStack = [
    { icon: Code2, name: "React", category: "Frontend" },
    { icon: BrainCircuit, name: "FastAPI", category: "Backend" },
    { icon: Database, name: "MongoDB Atlas", category: "Database" },
    { icon: Sparkles, name: "Google Gemini API", category: "AI Engine" },
    { icon: KeyRound, name: "JWT Authentication", category: "Security" },
    { icon: Paintbrush, name: "Tailwind CSS", category: "Styling" },
  ];

  
  const businessHelp = [
    {
      icon: Store,
      title: "Small Businesses",
      description:
        "Save time and marketing costs with instantly generated, professional content.",
    },
    {
      icon: Building2,
      title: "Startups",
      description:
        "Launch product listings faster without a dedicated content team.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Sellers",
      description:
        "Create consistent, high-converting listings across multiple platforms.",
    },
    {
      icon: Megaphone,
      title: "Marketing Teams",
      description:
        "Generate campaign-ready captions and SEO content in seconds.",
    },
  ];

  
  const stats = [
    { value: "100%", label: "AI Powered" },
    { value: "24/7", label: "Available" },
    { value: "Seconds", label: "Generation Time" },
    { value: "Responsive", label: "Across Devices" },
  ];

  
  const roadmap = [
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Generate content in multiple languages for global reach.",
    },
    {
      icon: FileDown,
      title: "Export PDF",
      description: "Download generated content as ready-to-share PDFs.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team on shared product content.",
    },
    {
      icon: History,
      title: "AI Content History",
      description: "Track and revisit previously generated content anytime.",
    },
    {
      icon: BarChart3,
      title: "Product Analytics",
      description: "Understand how your generated content is performing.",
    },
    {
      icon: Share2,
      title: "Multi-platform Publishing",
      description: "Publish generated content directly to multiple platforms.",
    },
  ];

  
  const whyChooseUs = [
    "AI-powered content generated in seconds",
    "Consistent, professional quality every time",
    "Built for businesses of every size",
    "Secure, reliable and easy to use",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white overflow-x-hidden">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-grow bg-gray-50 dark:bg-gray-950">

        
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 py-16 sm:py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300/30 dark:bg-purple-700/20 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -right-24 w-72 h-72 sm:w-96 sm:h-96 bg-pink-300/30 dark:bg-pink-700/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              About ProDescription AI
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight tracking-tight">
              Helping Businesses Create
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Professional Product Content
              </span>
              With AI
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mt-6 leading-7 sm:leading-8 max-w-2xl mx-auto">
              ProDescription AI is an AI-powered platform designed to help
              businesses create professional product descriptions for
              e-commerce platforms instantly, consistently and at scale.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => navigate("/generate")}
                className="group inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium shadow-lg shadow-purple-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Generate Now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          
          <section className="py-16 sm:py-20">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 mb-4">
                  <Target className="w-6 h-6" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Our Mission
                </h2>

                <p className="text-gray-600 dark:text-gray-300 leading-7 sm:leading-8 mb-4">
                  Many small businesses struggle to create engaging product
                  listings due to limited marketing resources. This platform
                  simplifies the process by generating high-quality
                  descriptions, titles, taglines, SEO keywords, and social
                  media content within seconds.
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-7 sm:leading-8">
                  The goal is to improve product visibility, save time, and
                  help businesses build a stronger online presence through
                  AI-assisted content generation.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 mb-4">
                  <Rocket className="w-6 h-6" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Why ProDescription AI?
                </h2>

                <p className="text-gray-600 dark:text-gray-300 leading-7 sm:leading-8">
                  Instead of spending hours writing product content manually,
                  ProDescription AI lets you generate professional-grade
                  descriptions, titles, SEO keywords and captions in a
                  fraction of the time, so you can focus on growing your
                  business.
                </p>
              </div>
            </div>
          </section>

          
          <section className="py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
              Features
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
              Everything you need to create high-quality product content.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold text-base sm:text-lg mb-2">
                    {title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-6">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          
          <section className="py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
              Technology Stack
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
              Built with a modern, reliable and scalable technology stack.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {techStack.map(({ icon: Icon, name, category }) => (
                <div
                  key={name}
                  className="group bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold text-xs sm:text-sm mb-1">
                    {name}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 text-[11px] sm:text-xs">
                    {category}
                  </p>
                </div>
              ))}
            </div>
          </section>

          
          <section className="py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
              How It Helps Businesses
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
              Built to support every kind of business, at every stage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {businessHelp.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-purple-200 dark:hover:border-purple-800"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold text-base sm:text-lg mb-2">
                    {title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-6">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          
          <section className="py-16 sm:py-20">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                      {value}
                    </p>
                    <p className="text-purple-100 text-xs sm:text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          
          <section className="py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
              Future Roadmap
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
              We're continuously improving. Here's what's coming next.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {roadmap.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-semibold text-base sm:text-lg mb-2">
                    {title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-6">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          
          <section className="py-16 sm:py-20">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-md p-6 sm:p-10 lg:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
                Why Choose Us
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
                {whyChooseUs.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8 sm:mt-10">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setOpen(true)}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </section>

        </div>

        
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
                  Generate titles, descriptions, SEO keywords and captions in
                  seconds.
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
      </main>

      <Footer />
    </div>
  );
}

export default About;