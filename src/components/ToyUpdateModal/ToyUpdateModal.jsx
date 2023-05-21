import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ToyUpdateModal = (props) => {
  const { closeModal, selectedProduct } = props;
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (updatedToy) => {
    fetch(`https://turbo-troop-server.vercel.app/toys/${selectedProduct._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    console.log(updatedToy);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="modal-container bg-white w-1/2 max-w-3xl mx-auto rounded shadow-lg z-50">
        <div className="modal-content p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-center font-bold">
              {selectedProduct.name}
            </h2>
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              <svg
                className="fill-current w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  className="heroicon-ui"
                  d="M6.293 6l5.5-5.5a1 1 0 111.414 1.414L7.414 6l5.793 5.793a1 1 0 01-1.414 1.414L6.293 7l-5.5 5.5a1 1 0 11-1.414-1.414L4.586 6 .293 1.707A1 1 0 011.707.293L6 4.586 11.293.293a1 1 0 111.414 1.414L7.414 6z"
                />
              </svg>
            </button>
          </div>
          <div className="py-16 mx-auto">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="m-2 h-8 px-2 shadow-lg "
                placeholder="toy name"
                defaultValue={selectedProduct?.name}
                {...register("name", { required: true })}
              />
              <input
                className="m-2 h-8 px-2 shadow-lg "
                defaultValue={user?.displayName}
                {...register("seller", { required: true })}
                placeholder="seller"
              />
              <input
                className="m-2 h-8 px-2 shadow-lg "
                defaultValue={user?.email}
                {...register("email", { required: true })}
                placeholder="email"
              />

              <select
                className="m-2 h-8 px-2 shadow-lg "
                defaultValue={selectedProduct?.subCategory}
                {...register("subCategory")}
              >
                <option value="sportsCar">Sports car</option>
                <option value="fireTruck">Fire truck</option>
                <option value="policeCar">policeCar</option>
                <option value="truck">Truck</option>
              </select>

              <input
                className="m-2 h-8 px-2 shadow-lg "
                defaultValue={selectedProduct?.price}
                {...register("price", { required: true })}
                placeholder="price"
              />

              <input
                className="m-2 h-8 px-2 shadow-lg "
                defaultValue={selectedProduct?.availableQuantity}
                {...register("availableQuantity", { required: true })}
                placeholder="quantity"
              />
              <input
                className="m-2 h-8 px-2 shadow-lg "
                defaultValue={selectedProduct?.img}
                {...register("img", { required: true })}
                placeholder="photo url"
              />
              <input
                className="m-2 h-8 px-2 shadow-lg "
                defaultValue={selectedProduct?.description}
                {...register("description", { required: true })}
                placeholder="Detail description"
              />
              <input
                className="m-2 h-8 px-2 shadow-lg "
                defaultValue={selectedProduct?.rating}
                {...register("rating")}
                placeholder="rating"
              />

              {errors.exampleRequired && <span>This field is required</span>}

              <input className="btn btn-accent" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyUpdateModal;
