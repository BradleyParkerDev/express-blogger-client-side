import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import '../index.css';
const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const auth = useAuth(); //access the authentication context 
	const navigate = useNavigate() // be able to navigate to home on login

  return (
    <div >
      <br/>
      <br/>
      <div id="loginPage">
        <br/>
        <br/>
        <h1>Login</h1>
        <h3>{loginMessage}</h3>
        <br/>
        <br/>
        <label>Email: </label>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {" "}
        <label>Password: </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {" "}
        <button
          onClick={async () => {

            //login in using auth context
            const loginResult = await auth.login(email, password);
            console.log("button onclick loginResult: ", loginResult)
            if (loginResult.success) {
              navigate("/")
            }
            if (!loginResult.success) {
              setLoginMessage(loginResult.message)
            }
          }}
        >
          Login
        </button>
      </div>

      
    </div>

  );
};

export default LoginPage;
