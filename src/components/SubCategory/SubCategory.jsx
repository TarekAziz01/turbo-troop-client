import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import ToyCard from "../ToyCard/ToyCard";

const SubCategory = (props) => {
  const toys = props.toys;

  const { loading } = useContext(AuthContext);

  if (!toys) {
    return <progress className="progress w-56"></progress>;
  }
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  
    return (
      <div >
        {toys && (
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
