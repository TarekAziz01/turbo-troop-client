import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (newToy) => {
    fetch("http://localhost:5000/toys", {
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
    console.log(newToy);
  };

  return (
    <div className="bg-gray-500">
      <div className="py-16 w-1/2 mx-auto">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="m-2 h-8 px-2 shadow-lg "
            placeholder="toy name"
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

          <select className="m-2 h-8 px-2 shadow-lg " {...register("gender")}>
            <option value="sports car">sports car</option>
            <option value="fire truck">fire truck</option>
            <option value="police car">police car</option>
            <option value="truck">truck</option>
          </select>

          <input
            className="m-2 h-8 px-2 shadow-lg "
            defaultValue=""
            {...register("price", { required: true })}
            placeholder="price"
          />

          <input
            className="m-2 h-8 px-2 shadow-lg "
            defaultValue=""
            {...register("available-quantity", { required: true })}
            placeholder="quantity"
          />
          <input
            className="m-2 h-8 px-2 shadow-lg "
            defaultValue=""
            {...register("img", { required: true })}
            placeholder="photo url"
          />
          <input
            className="m-2 h-8 px-2 shadow-lg "
            defaultValue=""
            {...register("rating")}
            placeholder="rating"
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <input className="btn btn-accent" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddToy;
