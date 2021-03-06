import { Email, Password } from "@mui/icons-material";
import axios from "axios";
import React from "react";
import { useState  } from "react";
import { useHistory } from 'react-router-dom'
import {  toast } from 'react-toastify';



import loginImg from "../../images/loginImg.svg";
import "../Login/login.css";

const Login = () => {
  let history = useHistory();

  const [isLoader, setLoader] = useState(false);
  const [Login, setLogin] = useState({
    Email: "",
    Password: "",

  });
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...Login, [name]: value });
  };
  const submitLoign = async (event) => {
    event.preventDefault();
    try {
      setLoader(true)
      if(Login.Email==""||Login.Password==""|| Login.ConformPassword==""){
        return toast.error('✔ Plz fill all fields!',{ theme: "colored" });
      }
      const responce = await axios.post("https://localhost:44380/login",Login)
      console.log("res",responce)
      setLoader(false)
      localStorage.setItem("token",JSON.stringify(responce.data.token))
      history.push("/")
      toast.success('✔ User Login Successfully!',{ theme: "colored" });
    
    } catch (error) {
      console.log("error",error.responce)
      setLoader(false)
      toast.error('✔ User not login !',{ theme: "colored" });
    }

  };
  return (
    <>
      <div id="loginForm" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div class="card cardBorder shadow" style={{ maxWidth: "800px" }}>
            <div class="row g-0">
              <div class="col-md-4 order-md-1 d-flex align-items-center">
                <img src={loginImg} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8 order-md-0">
                <div class="card-body">
                  <h5 class="card-title text-center">LOGIN FORM</h5>
                  <form
                    class="row g-3"
                    onSubmit={(event) => {
                      submitLoign(event);
                    }}
                  >
                    <div class="col-md-12 ">
                      <label for="validationDefault01" class="form-label">
                        Email id
                      </label>
                      <div className="input-group ">
                        <span class="input-group-text" id="basic-addon1">
                          <i class="fas fa-envelope"></i>
                        </span>

                        <input
                          type="email"
                          class="form-control"
                          name="Email"
                          value={Login.Email}
                          onChange={handleChangeLogin}
                          id="validationDefault01"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>

                    <div class="col-md-12 ">
                      <label for="validationDefault02" class="form-label">
                        Password
                      </label>
                      <div className="input-group ">
                        <span class="input-group-text" id="basic-addon1">
                          <i class="fas fa-lock"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          name="Password"
                          value={Login.Password}
                          onChange={handleChangeLogin}
                          id="validationDefault02"
                          placeholder="*********"
                          required
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck2"
                          required
                        />
                        <label class="form-check-label" for="invalidCheck2">
                          Agree to terms and conditions
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-grid ">
                        <button
                          class="btn btn-warning"
                          type="submit"
                          disabled={isLoader}
                        >
                          {isLoader ? (
                             <>
                             <div
                               class="spinner-border text-dark spinner-border-sm"
                               role="status"
                             >
                               <span class="visually-hidden">Loading...</span>
                             </div>
                           </>
                          ) : (
                            "LogIn"
                           
                          )}
                        </button>
                      </div>
                    </div>
                    <p className=" text-center py-2 p-0 m-0">
                      ___________OR___________
                    </p>

                    <div className=" col-md-6 text-center">
                      <div class="d-grid ">
                        <button class="btn btn-danger" type="submit">
                          <i className="fab fa-google-plus-g "></i> Login with
                          Google+
                        </button>
                      </div>
                    </div>
                    <div className=" col-md-6">
                      <div class="d-grid ">
                        <button class="btn btn-primary" type="submit">
                          <i class="fa fa-facebook fa-fw"></i> Login with
                          Facebook
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
