import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const CreateBlogForm = (props) =>{
	const { setShouldRefresh, urlEndPoint } = props;
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");

    return(

        <div id = "blog-form">
            <input type = 'text' name></input>
            <input type = 'text'></input>
            <input type = 'text'></input>
            <input type = 'text'></input>

            <>
            <FloatingLabel controlId="floatingTextarea2" label="Text">
                <Form.Control
                as="textarea"
                placeholder="Blog Text"
                style={{ height: '100px' }}
                />
            </FloatingLabel>
            </>
        </div>
    )


}

export default CreateBlogForm;