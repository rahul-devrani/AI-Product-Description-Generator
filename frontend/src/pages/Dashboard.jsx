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
  updateProduct,
  regenerateProduct,
} from "../api/api";

function Dashboard({ darkMode, setDarkMode }) {

  const [products, setProducts] = useState([]);

  const [editingProduct, setEditingProduct] = useState(null);

  const [isRegenerating, setIsRegenerating] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

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


const handleRegenerate = async () => {

  setIsRegenerating(true);

  try {

    const regenerated = await regenerateProduct({

      product_name: editingProduct.product_name,

      ingredients: editingProduct.ingredients,

      weight: editingProduct.weight,

      key_features: editingProduct.key_features,

      tone: editingProduct.tone,

    });

    setEditingProduct({

      ...editingProduct,

      title: regenerated.title,

      description: regenerated.description,

      tagline: regenerated.tagline,

      seo_keywords: regenerated.seo_keywords,

      social_caption: regenerated.social_caption,

    });

    setToastMessage("AI content regenerated successfully.");

    setTimeout(() => {
      setToastMessage("");
    }, 2500);

  }

  catch (err) {

    console.error(err);

    alert("Unable to regenerate AI content.");

  }

  finally {

    setIsRegenerating(false);

  }

};

 
const handleUpdate = async () => {
  try {
    await updateProduct(
      editingProduct.id,
      editingProduct
    );

    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id
        ? editingProduct
        : product
    );

    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);

    setToastMessage("Product updated successfully.");

    setShowEditModal(false);

    setEditingProduct(null);

    setTimeout(() => {
      setToastMessage("");
    }, 2500);

  } catch (err) {
    console.error(err);
    alert("Unable to update product.");
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

        <section className="py-8 sm:py-12 lg:py-16">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">

              Dashboard

            </h1>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">

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

              <p className="text-red-500 font-medium mb-6 break-words">

                {error}

              </p>

            )}

            {!loading && (

              <>

                <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-6 sm:mb-8">

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
                    className="w-full md:w-auto shrink-0"
                  >

                    Refresh

                  </Button>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">

                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 sm:p-6">

                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">

                      Products

                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-2">

                      {products.length}

                    </h2>

                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 sm:p-6">

                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">

                      Titles

                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-2">

                      {products.length}

                    </h2>

                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 sm:p-6">

                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">

                      SEO Keywords

                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-2">

                      {

                        products.reduce(

                          (sum, product) =>

                            sum + (product.seo_keywords?.length || 0),

                          0

                        )

                      }

                    </h2>

                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 sm:p-6">

                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">

                      Captions

                    </p>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-2">

                      {products.length}

                    </h2>

                  </div>

                </div>

        
                <div className="hidden md:block bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">

                  <div className="overflow-x-auto">

                    <table className="w-full">

                      <thead className="bg-gray-100 dark:bg-gray-700">

                        <tr>

                          <th className="text-left p-4 whitespace-nowrap">

                            Product

                          </th>

                          <th className="text-left p-4 whitespace-nowrap">

                            Tone

                          </th>

                          <th className="text-left p-4">

                            Title

                          </th>

                          <th className="text-center p-4 whitespace-nowrap">

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

                              <td className="p-4 font-medium max-w-[220px] break-words">

                                {product.product_name}

                              </td>

                              <td className="p-4 whitespace-nowrap">

                                {product.tone}

                              </td>

                              <td className="p-4 max-w-[280px] break-words">

                                {product.title}

                              </td>

                              <td className="p-4">

                                <div className="flex justify-center gap-2 lg:gap-3 flex-wrap">

                                  <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() => handleView(product)}
                                  >

                                    View

                                  </Button>


                                  <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => {
                                      setEditingProduct(product);
                                      setShowEditModal(true);
                                    }}
                                  >
                                    Edit
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

                </div>

            
                <div className="md:hidden space-y-4">

                  {filteredProducts.length > 0 ? (

                    filteredProducts.map((product) => (

                      <div
                        key={product.id}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 space-y-3"
                      >

                        <div className="flex justify-between items-start gap-3">

                          <div className="min-w-0">

                            <p className="font-semibold text-base break-words">

                              {product.product_name}

                            </p>

                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">

                              Tone: {product.tone}

                            </p>

                          </div>

                        </div>

                        <div>

                          <p className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">

                            Title

                          </p>

                          <p className="text-sm break-words">

                            {product.title}

                          </p>

                        </div>

                        <div className="flex gap-2 pt-2 flex-wrap">

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleView(product)}
                            className="flex-1 min-w-[80px]"
                          >

                            View

                          </Button>

                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                              setEditingProduct(product);
                              setShowEditModal(true);
                            }}
                            className="flex-1 min-w-[80px]"
                          >
                            Edit
                          </Button>

                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(product.id)}
                            className="flex-1 min-w-[80px]"
                          >

                            Delete

                          </Button>

                        </div>

                      </div>

                    ))

                  ) : (

                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md text-center py-10 text-gray-500 dark:text-gray-400">

                      No matching products found.

                    </div>

                  )}

                </div>



                {selectedProduct && (

                  <section className="mt-10 sm:mt-14">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">

                      Product Details

                    </h2>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">

                      <div>

                        <h3 className="font-semibold text-base sm:text-lg mb-2">

                          Product Name

                        </h3>

                        <p className="break-words">{selectedProduct.product_name}</p>

                      </div>

                      <div>

                        <h3 className="font-semibold text-base sm:text-lg mb-2">

                          Product Title

                        </h3>

                        <p className="break-words">{selectedProduct.title}</p>

                      </div>

                      <div>

                        <h3 className="font-semibold text-base sm:text-lg mb-2">

                          Description

                        </h3>

                        <p className="leading-7 break-words">

                          {selectedProduct.description}

                        </p>

                      </div>

                      <div>

                        <h3 className="font-semibold text-base sm:text-lg mb-2">

                          Tagline

                        </h3>

                        <p className="break-words">

                          {selectedProduct.tagline}

                        </p>

                      </div>

                      <div>

                        <h3 className="font-semibold text-base sm:text-lg mb-2">

                          SEO Keywords

                        </h3>

                        <div className="flex flex-wrap gap-2">

                          {selectedProduct.seo_keywords?.map(

                            (keyword, index) => (

                              <span
                                key={index}
                                className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs sm:text-sm break-words"
                              >

                                {keyword}

                              </span>

                            )

                          )}

                        </div>

                      </div>

                      <div>

                        <h3 className="font-semibold text-base sm:text-lg mb-2">

                          Social Media Caption

                        </h3>

                        <p className="leading-7 break-words">

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

      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl w-full max-w-[700px] max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Edit Product
            </h2>

            <div className="space-y-4">

  <Input
    label="Product Name"
    value={editingProduct?.product_name || ""}
    onChange={(e) =>
      setEditingProduct({
        ...editingProduct,
        product_name: e.target.value,
      })
    }
  />

  <Input
    label="Ingredients"
    value={editingProduct?.ingredients || ""}
    onChange={(e) =>
      setEditingProduct({
        ...editingProduct,
        ingredients: e.target.value,
      })
    }
  />

  <Input
    label="Weight"
    value={editingProduct?.weight || ""}
    onChange={(e) =>
      setEditingProduct({
        ...editingProduct,
        weight: e.target.value,
      })
    }
  />

  <Input
    label="Key Features"
    value={editingProduct?.key_features || ""}
    onChange={(e) =>
      setEditingProduct({
        ...editingProduct,
        key_features: e.target.value,
      })
    }
  />

  <div>
    <label className="block mb-2 font-medium text-sm sm:text-base">
      Tone
    </label>

    <select
      value={editingProduct?.tone || ""}
      onChange={(e) =>
        setEditingProduct({
          ...editingProduct,
          tone: e.target.value,
        })
      }
      className="w-full border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base dark:bg-gray-700"
    >
      <option>Premium</option>
      <option>Traditional</option>
      <option>Healthy</option>
    </select>
  </div>

</div>


<div className="mt-6 border-t pt-6">

  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
    <h3 className="text-base sm:text-lg font-semibold">
      AI Generated Content
    </h3>

<Button
  variant="warning"
  onClick={handleRegenerate}
  disabled={isRegenerating}
  className="w-full sm:w-auto"
>
  {isRegenerating
    ? "Regenerating..."
    : "Regenerate AI"}
</Button>
  </div>

  <div className="space-y-4">

    <Input
      label="AI Title"
      value={editingProduct?.title || ""}
      onChange={(e) =>
        setEditingProduct({
          ...editingProduct,
          title: e.target.value,
        })
      }
    />

    <div>
      <label className="block mb-2 font-medium text-sm sm:text-base">
        AI Description
      </label>

      <textarea
        rows={5}
        value={editingProduct?.description || ""}
        onChange={(e) =>
          setEditingProduct({
            ...editingProduct,
            description: e.target.value,
          })
        }
        className="w-full border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base dark:bg-gray-700"
      />
    </div>

    <Input
      label="Tagline"
      value={editingProduct?.tagline || ""}
      onChange={(e) =>
        setEditingProduct({
          ...editingProduct,
          tagline: e.target.value,
        })
      }
    />

    <Input
      label="SEO Keywords"
      value={editingProduct?.seo_keywords?.join(", ") || ""}
      onChange={(e) =>
        setEditingProduct({
          ...editingProduct,
          seo_keywords: e.target.value
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
        })
      }
    />

    <div>
      <label className="block mb-2 font-medium text-sm sm:text-base">
        Social Caption
      </label>

      <textarea
        rows={4}
        value={editingProduct?.social_caption || ""}
        onChange={(e) =>
          setEditingProduct({
            ...editingProduct,
            social_caption: e.target.value,
          })
        }
        className="w-full border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base dark:bg-gray-700"
      />
    </div>

  </div>

</div>
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
              <Button
                variant="secondary"
                onClick={() => setShowEditModal(false)}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
            <Button
              variant="primary"
              onClick={handleUpdate}
              className="w-full sm:w-auto"
            >
              Save Changes
            </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />

    </div>

  );

}

export default Dashboard;