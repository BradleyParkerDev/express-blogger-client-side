import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/create-one">Create Blog</Link>
        </div>
    )
}
export default NavBar;