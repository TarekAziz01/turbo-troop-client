import { Link } from "react-router-dom";

const ToyCard = (props) => {
  // console.log(props)
  const { img, name, price, rating,_id } = props.toy;
    return (
      <div className="md:w-1/2 lg:w-1/3 px-4 mb-6 mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="text-lg">Price: {price}</p>
            <p className="text-lg">Rating: {rating}</p>
            <p></p>
            <div className="card-actions justify-end">
              <div className="btn btn-sm ">
                <Link to={`/toy/${_id}`}>
                  <button className="">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ToyCard;