import { useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BlogCard from "./BlogCard"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

const UpdateModal = (props) =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {blog} = props
    console.log(blog)
    // const navigate = useNavigate();
    // const {  urlEndPoint } = props;
    // console.log(urlEndPoint);
    // //const { setShouldRefresh, urlEndPoint } = props;
    const [title, setTitle] = useState(blog.title);
    const [author, setAuthor] = useState(blog.author);
    const [category, setCategory] = useState(blog.category);
    const [text, setText] = useState(blog.text);
    const [lastModified, setLastModified] = useState(blog.lastModified)


    const updateBlog = () =>{

    //setShouldRefresh(true)
    console.log(urlEndPoint)
	const req =  {
      title: title,
      author: author,
      category: category,
      text: text,
      lastModified: Date()
    }

    axios.put(`${urlEndPoint}/blogs/update-one/:id`, req)
    .then(function (response) {
      console.log(response);
    },{
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    .catch(function (error) {
      console.log(error);
    }); 

    //setShouldRefresh(false);
    }







    return(

        <div
            className="modal show"
            //style={{ display: 'block', position: 'initial' }}
        >


            <Button variant="primary" onClick={handleShow}>
                update                
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Update Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <div id = "blog-form">
                    <label>Title: </label>
                    <br/>
                    <input type = 'text' placeholder="Updated React Article" onChange={(e)=>{
                    setTitle(e.target.value) }}
                    />
                    <br/>
                    <label>Author: </label>
                    <br/>
                    <input type = 'text' placeholder="Update Author Name" onChange={(e)=>{
                    setAuthor(e.target.value) }}
                    />
                    <br/>
                    <label>Category: </label>
                    <br/>
                    <input type = 'text'placeholder="Ipsum" onChange={(e)=>{
                    setCategory(e.target.value) }}
                    />
                    <br/>
                    <br/>
                    <label>Blog Text: </label>
                    <FloatingLabel controlId="floatingTextarea2">
                        <Form.Control
                        as="textarea"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        style={{ height: '300px', width: '900px'}}
                        onChange={(e)=>{
                        setText(e.target.value) 
                        }}
                        />
                    </FloatingLabel>

                </div>
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary"  onClick={()=>{
                    updateBlog()
                }}>

                    Save Changes

                </Button>
                </Modal.Footer>
            </Modal>


        </div>

    )
}

export default UpdateModal;