import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";


const CatagoryDetails = () => {
    const allData= useLoaderData()
    const singleData = allData.meals
    return (
        <div className="grid grid-cols-4 gap-5 px-20 my-10">
            {
                singleData.map((card, index) => <Card key={index} card={card}></Card>)
            }
        </div>
    );
};

export default CatagoryDetails;