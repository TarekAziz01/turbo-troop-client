import { useContext, useEffect, useState } from "react";
import ToyUpdateModal from "../../components/ToyUpdateModal/ToyUpdateModal";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

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
        
        fetch(`http://localhost:5000/toys/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", " Toy has been deleted.", "success");
              const remaining = products.filter(product => product._id !== _id)
              setProducts(remaining);
            }
          })
      }
    });
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
                  src={product.img}
                  alt={product.name}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
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
          handleUpdate={handleUpdate}
        ></ToyUpdateModal>
      )}
    </div>
  );
};

export default MyToys;
