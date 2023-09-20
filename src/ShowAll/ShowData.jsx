import { useLoaderData } from "react-router-dom";
import ShowView from "./ShowView";


const ShowData = () => {
    const showData = useLoaderData();
    const showDetailsData = showData.meals

    return (
        <div>
            {
                showDetailsData.map((showDetails, index) => <ShowView key={index} showDetails={showDetails}></ShowView>)
            }
        </div>
    );
};

export default ShowData;