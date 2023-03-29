import { useState } from "react";
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div>
        <br/>
        <br/>
        <div id="registrationPage"> 
          <br/>
          <br/>
          <h1>Registration</h1>
          <h3>{registerMessage}</h3>
          <br/>
          <br/>
          <label>Email: </label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              const registerResult = await auth.register(email, password);
              if (registerResult.success) {
                navigate("/users/login");
              }
              if (!registerResult.success) {
                setRegisterMessage(registerResult.message);
              }
            }}
          >
            Signup
          </button>
        </div>

    </div>
    
  );
};

export default RegistrationPage;