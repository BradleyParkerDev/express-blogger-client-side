import { Link } from "react-router-dom";
// import '../../public/css/style.css'

const NavBar = () => {
    return (
        <div id="navBar">
            <Link to="/">Home</Link>
            <Link to="/create-one">Create Blog</Link>


        </div>
    )
}
export default NavBar;