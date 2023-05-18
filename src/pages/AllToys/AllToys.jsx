import { useLoaderData } from "react-router-dom";
import ToyCard from "../../components/ToyCard/ToyCard";


const AllToys = () => {

    const toys = useLoaderData();
    return (
        <div>
            <h3>{toys.length}</h3>
            {
                toys.map(toy=><ToyCard></ToyCard>)
            }
        </div>
    );
};

export default AllToys;