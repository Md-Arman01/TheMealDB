import { useNavigate } from "react-router-dom";

const ShowView = ({ showDetails }) => {
  const { strMealThumb, strMeal, strCategory, strInstructions } = showDetails;

  const navigate  = useNavigate()
  const backHandle = () =>{
    navigate(-1)
  }
  return (
    <div>
      <div className="hero  py-16 bg-gray-300">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <img
            src={strMealThumb}
            className="w-[600px] rounded-lg shadow-2xl"
          />
          <div>
            <div className="flex items-end gap-1">
            <h1 className="text-5xl font-bold">{strMeal}</h1>
            <p className="font-medium">({strCategory})</p>
            </div>
            <p className="py-6">
                {strInstructions}
            </p>
            <button onClick={backHandle} className="btn text-white hover:bg-[#ff5052] bg-[#c52d2f]">Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowView;
