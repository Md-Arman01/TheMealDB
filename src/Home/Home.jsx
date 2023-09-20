import { Outlet, useLoaderData, useNavigation , useNavigate} from "react-router-dom";
import { redirect } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Navber/Nav";
import Loading from "../Loading/Loading";
import { useEffect } from "react";

const Home = () => {


  
  const cetagory = useLoaderData()
  const allCetagory = cetagory.categories
  
  const navigation = useNavigation()

  const navigate = useNavigate()

  useEffect(()=> {
    navigate('/nav/Beef')
  },[navigate])



  return (
    <div className="relative h-auto">
      {/* navber section */}
      <div className="navbar sticky top-0 z-10 bg-[#23180d] py-5 px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <h1 className="text-4xl font-black bg-gradient-to-t from-[#ff9623] to-[#ffaf52] text-transparent bg-clip-text">
            TheMealDB
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* navber */}
            <div  className="flex justify-center gap-5 flex-wrap w-[900px]" >

            {
              allCetagory.map((cetagory, index) => <Nav key={index} cetagory={cetagory}></Nav>)
            }
            </div>
            
          </ul>
        </div>
        <div className="navbar-end">
          <img
            className="w-14 h-14  rounded-full object-cover"
            src="https://i.ibb.co/sRyy8n1/Arman-01.jpg"
          />
        </div>
      </div>
      {/* oulet show */}
      {
        navigation.state === "loading"? <Loading></Loading> : <Outlet></Outlet>

      }

      

      {/* footer section */}

      <div className="sticky w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
