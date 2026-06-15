import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow bg-gray-50">

        <section className="py-16">

          <div className="max-w-7xl mx-auto px-6">

            <h1 className="text-4xl font-bold mb-10">
              Dashboard
            </h1>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-white shadow-md rounded-2xl p-6">
                <h3 className="text-gray-500 mb-2">
                  Descriptions Generated
                </h3>

                <p className="text-3xl font-bold">
                  120
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-6">
                <h3 className="text-gray-500 mb-2">
                  SEO Keywords
                </h3>

                <p className="text-3xl font-bold">
                  480
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-6">
                <h3 className="text-gray-500 mb-2">
                  Titles Generated
                </h3>

                <p className="text-3xl font-bold">
                  85
                </p>
              </div>

              <div className="bg-white shadow-md rounded-2xl p-6">
                <h3 className="text-gray-500 mb-2">
                  Captions Generated
                </h3>

                <p className="text-3xl font-bold">
                  230
                </p>
              </div>

            </div>

            <section className="mt-14">

              <h2 className="text-2xl font-bold mb-6">
                Recent Generations
              </h2>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden">

                <table className="w-full">

                  <thead className="bg-gray-100">

                    <tr>
                      <th className="text-left p-4">
                        Product
                      </th>

                      <th className="text-left p-4">
                        Feature
                      </th>

                      <th className="text-left p-4">
                        Tone
                      </th>

                      <th className="text-left p-4">
                        Status
                      </th>
                    </tr>

                  </thead>

                  <tbody>

                    <tr className="border-t">
                      <td className="p-4">
                        Himalayan Millet Cookies
                      </td>

                      <td className="p-4">
                        Product Description
                      </td>

                      <td className="p-4">
                        Premium
                      </td>

                      <td className="p-4 text-green-600">
                        Generated
                      </td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-4">
                        Traditional Apple Pickle
                      </td>

                      <td className="p-4">
                        SEO Keywords
                      </td>

                      <td className="p-4">
                        Traditional
                      </td>

                      <td className="p-4 text-green-600">
                        Generated
                      </td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-4">
                        Mixed Fruit Juice
                      </td>

                      <td className="p-4">
                        Product Title
                      </td>

                      <td className="p-4">
                        Premium
                      </td>

                      <td className="p-4 text-green-600">
                        Generated
                      </td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-4">
                        Organic Millet Snack
                      </td>

                      <td className="p-4">
                        Social Caption
                      </td>

                      <td className="p-4">
                        Health Focused
                      </td>

                      <td className="p-4 text-green-600">
                        Generated
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </section>

            <section className="mt-14">

              <h2 className="text-2xl font-bold mb-6">
                Upcoming Features
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="font-semibold text-lg mb-2">
                    Product Description Generator
                  </h3>

                  <p className="text-gray-500">
                    Coming Soon
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="font-semibold text-lg mb-2">
                    SEO Keyword Recommendation
                  </h3>

                  <p className="text-gray-500">
                    Coming Soon
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="font-semibold text-lg mb-2">
                    Product Title Generator
                  </h3>

                  <p className="text-gray-500">
                    Coming Soon
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="font-semibold text-lg mb-2">
                    Social Media Caption Generator
                  </h3>

                  <p className="text-gray-500">
                    Coming Soon
                  </p>
                </div>

              </div>

            </section>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Dashboard;