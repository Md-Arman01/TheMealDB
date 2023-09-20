import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import CatagoryDetails from './CatagoryDetails/CatagoryDetails';
import ShowData from './ShowAll/ShowData';
import Error from './Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
    children:[
      {
        path: "/nav/:strCategory",
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`),
        element: <CatagoryDetails></CatagoryDetails>
        
      },
      {
        path: "/nav/cetagory/:mealId",
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element: <ShowData></ShowData>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
