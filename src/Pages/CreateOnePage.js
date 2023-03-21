import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CreateBlogForm from '../Components/CreateBlogForm';


const CreateOnePage = (props) =>{
  

    return(
      <CreateBlogForm urlEndPoint={props.urlEndPoint} />
    )

}

export default CreateOnePage;