import './App.css';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage';
import CreateBlogForm from './Pages/CreateBlogForm';
import Layout from './Layouts/Layout';
import axios from 'axios';


const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {

  const [blogList, setBlogList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(()=> {
    axios.get(`${urlEndPoint}/Blogs/all/`)
    .then(function (response){
      console.log(response);
      setBlogList(response.data.blogs);
      
    })
    .catch(function (error){
      console.log(error);
    })
    .finally(function (){
      //always executed
    })

  },[])
  

  const router = createBrowserRouter([
    {
      path: "/all",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage 
            blogList={blogList} 
            urlEndPoint={urlEndPoint} 
            setShouldRefresh={setShouldRefresh}
          />

        },
        { 
          path: "create-one",
          element: <CreateBlogForm urlEndPoint={urlEndPoint} setShouldRefresh={setShouldRefresh}/>
        }
      ]

    }
  ])


  return(
    <div id="appContainer">
      <h1>Full-Stack Blogger</h1>
      <div id="blogCardContainer">
        
      </div>
    </div>
  ); 
}

export default App;
