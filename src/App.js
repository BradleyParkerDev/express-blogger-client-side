import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage';
import CreateOnePage from './Pages/CreateOnePage';
import Layout from './Layouts/Layout';
import axios from 'axios';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;
function App() {

  const [blogList, setBlogList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(()=> {
    axios.get(`${urlEndPoint}/Blogs/`)
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

  },[shouldRefresh])
  

  const router = createBrowserRouter([
    {
      path: "/",
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
          path: "/create-one",
          element: <CreateOnePage 
          urlEndPoint={urlEndPoint} 
          setShouldRefresh={setShouldRefresh}/>
        },
        { 
          path: "/users/login",
          element: <LoginPage 
          urlEndPoint={urlEndPoint} 
          setShouldRefresh={setShouldRefresh}/>
        },
        { 
          path: "/users/Registration",
          element: <RegistrationPage 
          urlEndPoint={urlEndPoint} 
          setShouldRefresh={setShouldRefresh}/>
        }
        

      ]

    }
  ])


  return(
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  ); 
}

export default App;
