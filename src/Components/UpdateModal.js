import { useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
    const { setShouldRefresh } = props;
    const [title, setTitle] = useState(blog.title);
    const [author, setAuthor] = useState(blog.author);
    const [categories, setCategory] = useState(blog.categories);
    const [text, setText] = useState(blog.text);
    // const [lastModified, setLastModified] = useState(blog.lastModified)


    const updateBlog = () =>{

    setShouldRefresh(true)
	const req =  {
      title: title,
      author: author,
      categories: categories.split(","),
      text: text,
      lastModified: new Date()
    }

    axios.put(`${urlEndPoint}/blogs/update-one/${blog.id}`, req)
    .then(function (response) {
      console.log(response);
        setShouldRefresh(false);
    },{
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    .catch(function (error) {
      console.log(error);
    }); 

    }







    return(

        <div
            // className="modal show"
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

                <div id = "modal-form">
                    <label>Title: </label>
                    <br/>
                    <input type = 'text' value= {title} placeholder="Updated React Article" onChange={(e)=>{
                    setTitle(e.target.value) }}
                    />
                    <br/>
                    <label>Author: </label>
                    <br/>
                    <input type = 'text' value = {author} placeholder="Update Author Name" onChange={(e)=>{
                    setAuthor(e.target.value) }}
                    />
                    <br/>
                    <label>Categories: </label>
                    <br/>
                    <input type = 'text' value = {categories} placeholder="Ipsum" onChange={(e)=>{
                    setCategory(e.target.value) }}
                    />
                    <br/>
                    <br/>
                    <label>Blog Text: </label>
                    <FloatingLabel controlId="floatingTextarea2">
                        <Form.Control
                        as="textarea"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        value ={text}
                        style={{ height: '300px', width: "455px"}}
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
                    handleClose()

                }}>

                    Save Changes

                </Button>
                </Modal.Footer>
            </Modal>


        </div>

    )
}

export default UpdateModal;