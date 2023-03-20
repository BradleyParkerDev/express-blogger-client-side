import { useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import '../../public/css/style.css'

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
                <h2>{blog.author}</h2>
                <p>{blog.text}</p>


            </div>
        ))

    );
}

export default BlogCard;