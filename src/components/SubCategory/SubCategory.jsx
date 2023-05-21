
import ToyCard from "../ToyCard/ToyCard";

const SubCategory = (props) => {
  const toys = props.toys;
  
    return (
      <div >
        {toys.length && (
          <div className="flex flex-wrap">
            {toys&&toys.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        )}
      </div>
    ); 
};

export default SubCategory;
