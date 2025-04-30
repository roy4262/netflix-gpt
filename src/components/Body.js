import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Login";
import {Browse} from "./Browse";
import { Header }  from "./Header";


const Body= () =>{
    const appRouter= createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        },

        {
            path:"/browse/header",
            element:<Header />
        },
    ])
    return(
       <div>
        <RouterProvider router={appRouter} />
        
       </div>
    )
}
export default Body;