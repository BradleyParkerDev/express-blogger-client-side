import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const CreateBlogForm = (props) =>{
    const navigate = useNavigate();
    const {  urlEndPoint } = props;
    console.log(urlEndPoint);
    //const { setShouldRefresh, urlEndPoint } = props;
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");


    const postBlog = () =>{

    //setShouldRefresh(true)
    console.log(urlEndPoint)
		const req =  {
      title: title,
      author: author,
      category: category,
      text: text
    }

    axios.post(`${urlEndPoint}/blogs/create-one`, req)
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

      <div id = "blog-form">
        <label>Title: </label>
        <br/>
        <input type = 'text' placeholder="React Article" onChange={(e)=>{
          setTitle(e.target.value) }}
        />
        <br/>
        <label>Author: </label>
        <br/>
        <input type = 'text' placeholder="Bradley Parker" onChange={(e)=>{
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

        <Button variant="secondary" size="sm" onClick={()=>{
          postBlog()
          navigate("/create-one")
        }}>
          Post
        </Button>        
      </div>
    )

}

export default CreateBlogForm;