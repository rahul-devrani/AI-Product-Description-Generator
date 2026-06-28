import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Toast,
  Loader,
  Button,
  Input,
} from "../components/ui";

import {
  getProducts,
  deleteProduct,
  searchProducts,
} from "../api/api";

function Dashboard({ darkMode, setDarkMode }) {

  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [toastMessage, setToastMessage] = useState("");



  const handleRefresh = async () => {

    try {

      setLoading(true);

      const response = await getProducts();

      const data = response.products || [];

      setProducts(data);

      setFilteredProducts(data);

      setToastMessage("Dashboard refreshed successfully.");

      setTimeout(() => {

        setToastMessage("");

      }, 2500);

    }

    catch (err) {

      console.error(err);

      setError("Unable to load products.");

    }

    finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    const loadProducts = async () => {

      try {

        const response = await getProducts();

        const data = response.products || [];

        setProducts(data);

        setFilteredProducts(data);

      }

      catch (err) {

        console.error(err);

        setError("Unable to load products.");

      }

      finally {

        setLoading(false);

      }

    };

    loadProducts();

  }, []);




  const handleSearch = async (e) => {

    const value = e.target.value;

    setSearchQuery(value);

    if (!value.trim()) {

      setFilteredProducts(products);

      return;

    }

    try {

      const response = await searchProducts(value);

      setFilteredProducts(response.products || []);

    }

    catch (err) {

      console.error(err);

    }

  };




  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) {

      return;

    }

    try {

      await deleteProduct(id);

      const updated = products.filter(

        (product) => product.id !== id

      );

      setProducts(updated);

      setFilteredProducts(updated);

      if (

        selectedProduct &&
        selectedProduct.id === id

      ) {

        setSelectedProduct(null);

      }

      setToastMessage("Product deleted successfully.");

      setTimeout(() => {

        setToastMessage("");

      }, 2500);

    }

    catch (err) {

      console.error(err);

      alert("Unable to delete product.");

    }

  };




  const handleView = (product) => {

    setSelectedProduct(product);

    window.scrollTo({

      top: document.body.scrollHeight,

      behavior: "smooth",

    });

  };




  return (

    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-grow bg-gray-50 dark:bg-gray-950">

        <section className="py-16">

          <div className="max-w-7xl mx-auto px-6">
                        <h1 className="text-4xl font-bold mb-3">

              Dashboard

            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-8">

              Manage, search and monitor all AI generated product content.

            </p>

            {toastMessage && (

              <Toast message={toastMessage} />

            )}

            {loading && (

              <div className="flex justify-center py-12">

                <Loader />

              </div>

            )}

            {error && (

              <p className="text-red-500 font-medium mb-6">

                {error}

              </p>

            )}

            {!loading && (

              <>

                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">

                  <div className="w-full md:w-96">

                    <Input
                      label="Search Products"
                      name="search"
                      value={searchQuery}
                      onChange={handleSearch}
                      placeholder="Search by product name..."
                    />

                  </div>

                  <Button
                    variant="success"
                    onClick={handleRefresh}
                  >

                    Refresh

                  </Button>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                    <p className="text-gray-500 dark:text-gray-400">

                      Products

                    </p>

                    <h2 className="text-3xl font-bold mt-2">

                      {products.length}

                    </h2>

                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                    <p className="text-gray-500 dark:text-gray-400">

                      Titles

                    </p>

                    <h2 className="text-3xl font-bold mt-2">

                      {products.length}

                    </h2>

                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                    <p className="text-gray-500 dark:text-gray-400">

                      SEO Keywords

                    </p>

                    <h2 className="text-3xl font-bold mt-2">

                      {

                        products.reduce(

                          (sum, product) =>

                            sum + (product.seo_keywords?.length || 0),

                          0

                        )

                      }

                    </h2>

                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">

                    <p className="text-gray-500 dark:text-gray-400">

                      Captions

                    </p>

                    <h2 className="text-3xl font-bold mt-2">

                      {products.length}

                    </h2>

                  </div>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">

                  <table className="w-full">

                    <thead className="bg-gray-100 dark:bg-gray-700">

                      <tr>

                        <th className="text-left p-4">

                          Product

                        </th>

                        <th className="text-left p-4">

                          Tone

                        </th>

                        <th className="text-left p-4">

                          Title

                        </th>

                        <th className="text-center p-4">

                          Actions

                        </th>

                      </tr>

                    </thead>

                    <tbody>
                                            {filteredProducts.length > 0 ? (

                        filteredProducts.map((product) => (

                          <tr
                            key={product.id}
                            className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                          >

                            <td className="p-4 font-medium">

                              {product.product_name}

                            </td>

                            <td className="p-4">

                              {product.tone}

                            </td>

                            <td className="p-4">

                              {product.title}

                            </td>

                            <td className="p-4">

                              <div className="flex justify-center gap-3">

                                <Button
                                  variant="primary"
                                  size="sm"
                                  onClick={() => handleView(product)}
                                >

                                  View

                                </Button>

                                <Button
                                  variant="danger"
                                  size="sm"
                                  onClick={() => handleDelete(product.id)}
                                >

                                  Delete

                                </Button>

                              </div>

                            </td>

                          </tr>

                        ))

                      ) : (

                        <tr>

                          <td
                            colSpan="4"
                            className="text-center py-10 text-gray-500 dark:text-gray-400"
                          >

                            No matching products found.

                          </td>

                        </tr>

                      )}

                    </tbody>

                  </table>

                </div>



                {selectedProduct && (

                  <section className="mt-14">

                    <h2 className="text-3xl font-bold mb-6">

                      Product Details

                    </h2>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">

                      <div>

                        <h3 className="font-semibold text-lg mb-2">

                          Product Name

                        </h3>

                        <p>{selectedProduct.product_name}</p>

                      </div>

                      <div>

                        <h3 className="font-semibold text-lg mb-2">

                          Product Title

                        </h3>

                        <p>{selectedProduct.title}</p>

                      </div>

                      <div>

                        <h3 className="font-semibold text-lg mb-2">

                          Description

                        </h3>

                        <p className="leading-7">

                          {selectedProduct.description}

                        </p>

                      </div>

                      <div>

                        <h3 className="font-semibold text-lg mb-2">

                          Tagline

                        </h3>

                        <p>

                          {selectedProduct.tagline}

                        </p>

                      </div>

                      <div>

                        <h3 className="font-semibold text-lg mb-2">

                          SEO Keywords

                        </h3>

                        <div className="flex flex-wrap gap-2">

                          {selectedProduct.seo_keywords?.map(

                            (keyword, index) => (

                              <span
                                key={index}
                                className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm"
                              >

                                {keyword}

                              </span>

                            )

                          )}

                        </div>

                      </div>

                      <div>

                        <h3 className="font-semibold text-lg mb-2">

                          Social Media Caption

                        </h3>

                        <p className="leading-7">

                          {selectedProduct.social_caption}

                        </p>

                      </div>

                    </div>

                  </section>

                )}

              </>

            )}

          </div>

        </section>

      </main>

      <Footer />

    </div>

  );

}

export default Dashboard;