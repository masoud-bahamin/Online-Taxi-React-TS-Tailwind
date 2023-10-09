import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Wallet from "./pages/Wallet";



export const routes = [
    {path:"/" , element:<Home />},
    {path:"/login" , element:<Login />},
    {path:"/register" , element:<Register />},
    {path:"/profile" , element:<Profile />},
    {path:"/wallet" , element:<Wallet />},
    {path:"/fav" , element:<Favourite />},
]