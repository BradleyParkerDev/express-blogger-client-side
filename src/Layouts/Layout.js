import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <h1 id="pageHeader">Full-Stack Blogger</h1>
            <Outlet/>
        </div>
    );
}

export default Layout;