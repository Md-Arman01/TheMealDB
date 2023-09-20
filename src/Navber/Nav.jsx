import { NavLink, useNavigate } from "react-router-dom";
import './Nav.css'
import PropTypes from 'prop-types';


const Nav = ({cetagory}) => {
    const {strCategory} = cetagory;
    const navigate = useNavigate()
    const cetagoryHandle=()=>{
        navigate(`/nav/${strCategory}`)
    }
    return (
        <div>
            <NavLink onClick={cetagoryHandle} className="text-lg font-medium hover:bg-[#ff5052] bg-[#c52d2f] text-white px-4 py-1 rounded-md" to={`/nav/${strCategory}`}>{strCategory}</NavLink>
        </div>
    );
};

Nav.propTypes ={
    cetagory: PropTypes.object.isRequired
}

export default Nav;