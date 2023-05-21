import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const AllToys = () => {
  const [products, setProducts] = useState([]);
  // const products = useLoaderData();
  document.title="All Toys"
  const { loading } = useContext(AuthContext);
  
  useEffect(() => {
    fetch("https://turbo-troop-server.vercel.app/toys")
      .then(res => res.json())
      .then(data => {
      setProducts(data.slice(0,20))
    })
  },[])
    
    if (loading) {
      return <progress className="progress w-56"></progress>;
    }

    return (
      <div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Seller
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sub-category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Available Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product._id}>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.seller}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.subCategory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.availableQuantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/toy/${product._id}`}>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllToys;
