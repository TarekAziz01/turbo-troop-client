import { useContext, useEffect, useState } from "react";
import ToyUpdateModal from "../../components/ToyUpdateModal/ToyUpdateModal";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  const url = `http://localhost:5000/mytoys?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [url]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleUpdate = (product) => {
    // Handle update logic here
    console.log("Update product:", product);
  };

  const handleDelete = (product) => {
    // Handle delete logic here
    console.log("Delete product:", product);
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.rating}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="text-indigo-600 hover:text-indigo-900 mr-2"
                  onClick={() => openModal(product)}
                >
                  Update
                </button>
                <button
                  className="text-red-600 hover:text-red-900"
                  onClick={() => handleDelete(product)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && selectedProduct && (
        <ToyUpdateModal
          selectedProduct={selectedProduct}
          closeModal={closeModal}
          handleUpdate={handleUpdate}
        ></ToyUpdateModal>
      )}
    </div>
  );
};

export default MyToys;
