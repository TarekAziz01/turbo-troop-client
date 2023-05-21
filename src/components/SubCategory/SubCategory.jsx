import ToyCard from "../ToyCard/ToyCard";


const SubCategory = (props) => {
    const toys = props.toys;
    console.log(toys)
    return (
      <div className="flex flex-wrap">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
      </div>
    );
};

export default SubCategory;