import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  document.title = "Add Toys";
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (newToy) => {
    fetch("https://turbo-troop-server.vercel.app/toys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    // this.formRef.current.reset();

    // console.log(newToy);
  };

  return (
    <div className="bg-gray-500">
      <p className="text-center text-white text-2xl pt-5">Add new Toys</p>
      <div className="py-16 w-1/2 mx-auto">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="m-2 h-8 px-2 shadow-lg "
            placeholder="Toy name"
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
            placeholder="Email"
          />

          <select
            className="m-2 h-8 px-2 shadow-lg "
            {...register("subCategory")}
            placeholder="subCategory"
          >
            <option value="sportsCar">sports car</option>
            <option value="fireTruck">fire truck</option>
            <option value="policeCar">policeCar</option>
            <option value="truck">truck</option>
          </select>

          <input
            className="m-2 h-8 px-2 shadow-lg "
            defaultValue=""
            {...register("price", { required: true })}
            placeholder="Price"
          />

          <input
            className="m-2 h-8 px-2 shadow-lg "
            defaultValue=""
            {...register("availableQuantity", { required: true })}
            placeholder="AvailableQuantity"
          />
          <input
            className="m-2 h-8 px-2 shadow-lg "
            defaultValue=""
            {...register("img", { required: true })}
            placeholder="Photo url"
          />
          <input
            className="m-2 h-8 px-2 shadow-lg "
            defaultValue=""
            {...register("description", { required: true })}
            placeholder="Detail description"
          />
          <input
            className="m-2 h-8 px-2 shadow-lg "
            defaultValue=""
            {...register("rating")}
            placeholder="Rating"
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <input className="btn btn-accent" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddToy;
