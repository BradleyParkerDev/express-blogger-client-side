import { useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateModal from "./UpdateModal";

const BlogCard =(props)=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {blogList} = props;
    console.log(blogList)
    return(
        blogList.map(blog=>(
            <div id="cardContainer">

                <h1>{blog.title}</h1>
                <h3>{blog.author}</h3>
                <h4>Created: {blog.createdAt}</h4>
                <h4>Modified: {blog.lastModified}</h4>
                <p>{blog.text}</p>
                {/* <Button variant="primary">View</Button>{' '} */}
                <UpdateModal blog={blog}/>
    
            </div>

            
        ))

    );
}

export default BlogCard;