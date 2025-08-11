import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";

export const router = createBrowserRouter([
    {
        index : true ,
        element : <Home/>
    }
])

