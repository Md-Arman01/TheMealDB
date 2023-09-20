import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Card = ({card}) => {

    const {idMeal, strMeal, strMealThumb} = card

    const navigate = useNavigate()
    const showHandle = () => {
        navigate(`/nav/cetagory/${idMeal}`)
    }
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={strMealThumb} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl">{strMeal.slice(0, 17)}</h2>
    <div className="card-actions">
      <button onClick={showHandle} className="btn text-white hover:bg-[#ff5052] bg-[#c52d2f]">Show Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

Card.propTypes ={
  card: PropTypes.object.isRequired
}

export default Card;