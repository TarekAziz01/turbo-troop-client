import { useContext, useEffect, useState } from "react";
import ToyUpdateModal from "../../components/ToyUpdateModal/ToyUpdateModal";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  document.title = "My Toy";
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { user, loading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  const url = `https://turbo-troop-server.vercel.app/mytoys?email=${user.email}`;
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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://turbo-troop-server.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", " Toy has been deleted.", "success");
              const remaining = products.filter(
                (product) => product._id !== _id
              );
              setProducts(remaining);
            }
          });
      }
    });
  };

  // sorting
  // const [toys, setToys] = useState(products);
  const [sortOrder, setSortOrder] = useState("asc");
  const handleSortAscending = () => {
    const sortedToys = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedToys);
    setSortOrder("asc");
  };

  const handleSortDescending = () => {
    const sortedToys = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedToys);
    setSortOrder("desc");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="flex justify-end mb-4">
          <button
            onClick={handleSortAscending}
            className={`mr-2 py-1 px-3 rounded ${
              sortOrder === "asc"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            Sort Ascending
          </button>
          <button
            onClick={handleSortDescending}
            className={`py-1 px-3 rounded ${
              sortOrder === "desc"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            Sort Descending
          </button>
        </div>
        {/* <ul>
          {products.map((toy) => (
            <li key={toy._id}>
              {toy.name} - ${toy.price}
            </li>
          ))}
        </ul> */}
      </div>

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
              Sub-category
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
                  src={product.img}
                  alt={product.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.subCategory}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product.price} $</td>
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
                  onClick={() => handleDelete(product._id)}
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
        ></ToyUpdateModal>
      )}
    </div>
  );
};

export default MyToys;
