import { Link, useRouteError, useLocation, NavLink } from "react-router-dom";
import oops from '../../assets/7188150.png';
import { Helmet } from "react-helmet";

export default function ErrorPage() {
  
  const error = useRouteError();
  const location = useLocation();

  const routeName = location.pathname.split("/").filter(Boolean).join(" ") || "Home";

  return (
   <div className="max-w-screen min-h-screen mx-auto bg-gray-300">
    
     <Helmet>
        <title>Not Found Page</title>
      </Helmet>
      
       <div className="w-full h-screen flex flex-col items-center justify-center gap-3 bg-gray-600">
     
      
      <img className="w-[100px]" src={oops} alt="Oops!" />
      <h1 className="text-4xl font-bold">{error?.status}</h1>
      <p className="text-2xl font-bold  ">This page is not available.</p>
    
      <NavLink to={'/'}>
        <button className="btn">Go To Home</button>
    </NavLink>
    </div>
    
    
   </div>
  );
}
