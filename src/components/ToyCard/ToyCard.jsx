

const ToyCard = (props) => {
  console.log(props)
  const { img, name, price, rating } = props.toy;
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{rating}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{price}</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    );
};

export default ToyCard;