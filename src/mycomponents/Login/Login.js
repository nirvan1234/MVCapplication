import React from "react";

import loginImg from "../../images/loginImg.svg";
import "../Login/login.css";

const Login = () => {
  return (
    <>
      <div id="loginForm" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div class="card cardBorder shadow" style={{ maxWidth: "600px" }}>
            <div class="row g-0">
              <div class="col-md-4 order-md-1 d-flex align-items-center">
                <img src={loginImg} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8 order-md-0">
                <div class="card-body">
                  <h5 class="card-title text-center">LOGIN FORM</h5>
                  <form class="row g-3">
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
                      <button class="btn btn-primary" type="submit">
                        LogIn
                      </button>
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
