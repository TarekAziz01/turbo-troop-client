/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";


const ToyDetails = () => {

    const toy = useLoaderData();
    const { img, name, seller, email, subCategory, price, availableQuantity, description, rating } = toy;

    return (
      <div className="mt-5">
        <div className="flex flex-col md:flex-row md:max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
          <div className="md:w-1/3">
            <img src={img} alt="Toy" className="w-full h-auto object-contain" />
          </div>
          <div className="md:w-2/3 md:pl-4">
            <h2 className="text-2xl font-bold mb-2"> Name: {name}</h2>
            <p className="text-lg mb-2">Seller: {seller}</p>
            <p className="text-gray-600 mb-2"> Email: {email}</p>
            <p className="text-lg mb-2">Price: {price} $</p>
            <div className="flex items-center mb-2">
              <p className="mr-2">Rating:</p>
              <div className="flex">
                <Rating
                  style={{ maxWidth: 110 }}
                  value={Math.round(rating)}
                  readOnly
                />
              </div>
            </div>
            <p className="text-gray-600 mb-2">
              Available Quantity: {availableQuantity}
            </p>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;