import { useLoaderData } from "react-router-dom";


const AllToys = () => {

    const products = useLoaderData();

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
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.seller}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.subCategory}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.availableQuantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => console.log("View Details:", product)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
