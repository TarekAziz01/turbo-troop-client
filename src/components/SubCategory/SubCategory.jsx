import ToyCard from "../ToyCard/ToyCard";


const SubCategory = (props) => {
    const toys = props.toys;
    console.log(toys)
    return (
      <div>
        {
          toys.map((toy) => (
            <ToyCard key={toy._id} toy={toy}></ToyCard>
          ))
        }
      </div>
    );
};

export default SubCategory;