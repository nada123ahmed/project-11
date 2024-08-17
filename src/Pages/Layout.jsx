import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

function Layout(props){
    return(
        <>
<NavBar quantity={props.quantity} setQuantity={props.setQuantity}  ></NavBar>
<Outlet></Outlet> 

</>
    )
}
export default Layout;