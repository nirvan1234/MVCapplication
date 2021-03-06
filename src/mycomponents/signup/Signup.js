import React,{useState} from "react";
import { NavLink  } from "react-router-dom";
import welcomepage from "../../images/welcomPage.svg";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../signup/singup.css";

const Signup = () => {
  let history = useHistory();

  const [isLoader, setLoader] = useState(false);
  const [signUp, setSignUp] = useState({
    Email: "",
    Password: "",
    ConformPassword: "",
  });
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };
  const submitSignUp = async (event) => {
    // event.preventDefault();
    try {
console.log(signUp)
      setLoader(true);
      if (
        signUp.Email == "" ||
        signUp.Password == "" ||
        signUp.ConformPassword == ""
      ) {
        setLoader(false);
        return toast.error("✔ Plz fill all fields!", { theme: "colored" }); 
      }
      debugger
      const responce = await axios.post("https://localhost:44380/Registration", signUp);
      console.log("res", responce);
      setLoader(false);
      // localStorage.setItem("token", JSON.stringify(responce.data.token));
      history.push("/login");
      toast.success(`✔ ${responce.data.msg}`, { theme: "colored" });
    } catch (error) {
      console.log("error", error);
      setLoader(false);
      toast.error("✔ User not login !", { theme: "colored" });
    }
  }
    return (
      <>
        <section id="signupform" className="d-flex align-items-center">
          <div class="container d-flex justify-content-center">
            <div class="row ">
              <div
                class="card card-registration my-4"
                style={{ maxWidth: "1000px" }}
              >
                <div class="row">
                  <div class="col-xl-7 order-md-0 d-flex align-items-center">
                    <img
                      src={welcomepage}
                      alt="Sample photo"
                      class="img-fluid "
                    />
                    {/* "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" */}
                  </div>
                  <div class="col-xl-5 order-md-1">
                    <div class="card-body p-md-5 text-black ">
                      <form className="g-3">
                        <h3 class="mb-5 text-uppercase text-center">
                          Create Account
                        </h3>
                        <div className="row">
                          <div></div>
                        </div>

                        {/* <div class="row">
                        <div class="col-md-6 mb-4"> */}
                        {/* <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1m"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example1m">
                          First name
                        </label>
                      </div>

                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1n"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example1n">
                          Last name
                        </label>
                      </div> */}

                        <div class="form-outline mb-2">
                          <input
                            type="text"
                            id="form3Example97"
                            name="Email"
                            value={signUp.Email}
                            onChange={handleChangeLogin}
                            class="form-control form-control-lg"
                            placeholder="Email "
                          />
                          <label class="form-label" for="form3Example97">
                            Email ID
                          </label>
                        </div>

                        <div class="form-outline mb-2">
                          <input
                            type="password"
                            id="form3Example1m"
                            name="Password"
                            value={signUp.Password}
                            onChange={handleChangeLogin}
                            class="form-control form-control-lg"
                            placeholder="******"
                          />
                          <label class="form-label" for="form3Example1m1">
                            Password
                          </label>
                        </div>
                        <div class="form-outline mb-2">
                          <input
                            type="password"
                            id="form3Example1m1"
                            name="ConformPassword"
                            value={signUp.ConformPassword}
                            onChange={handleChangeLogin}
                            class="form-control form-control-lg"
                            placeholder="******"
                          />
                          <label class="form-label" for="form3Example1m1">
                            Conform Password
                          </label>
                        </div>
                        <div class="form-outline mb-2">
                          <input
                            class="form-check-input p-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            I agree to the <span>Term</span> and
                            <span>Privacy policy</span>
                          </label>
                        </div>
                        <div className="row g-3">
                          <div className="col-md-6 ">
                            <div class="d-grid">
                              <button
                                type="button"
                                class="btn btn-warning btn-lg"
                                disabled={isLoader}
                                onClick={(event) => {
                                  submitSignUp(event);
                                }}
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
                            "Sign Up"
                           
                          )}
                              
                              </button>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="d-grid">
                              <NavLink
                                type="button"
                                class="btn btn-outline-warning  btn-lg "
                                to={"/login"}
                              >
                                Sign In
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

export default Signup;

//.......................................bootstrap Registration form
// {
/* <div id="loginForm" className="d-flex align-items-center">
        <div className="container  my-5 d-flex justify-content-center">
          <div class="card shadow" style={{ maxWidth: "600px" }}>
            <div class="row g-0">
              <div class="col-md-4 order-md-1 d-flex align-items-center">
                <img src={loginImg} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8 order-md-0">
                <div class="card-body">
                  <h5 class="card-title text-center">SIGNUP FORM</h5>
                  <form class="row g-3">
                    <div class="col-md-12 ">
                      <label for="validationDefault02" class="form-label">
                        User Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationDefault02"
                        placeholder="Username"
                        required /
                      />
                    </div>
                    <div class="col-md-12 ">
                      <label for="validationDefault01" class="form-label">
                        Email id
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="validationDefault01"
                        placeholder="Email"
                        required /
                      />
                    </div>

                    <div class="col-md-12 ">
                      <label for="validationDefault02" class="form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationDefault02"
                        placeholder="*********"
                        required /
                      />
                    </div>
                    <div class="col-md-12 ">
                      <label for="validationDefault02" class="form-label">
                        Conform Password
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationDefault02"
                        placeholder="conformpassword"
                        required /
                      />
                    </div>

                    <div class="col-12">
                      <button class="btn btn-primary">SingUp</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
// ....................materialui......
// <Container maxWidth="xl">
//     <Stack
//       direction="row"
//       justifyContent="center"
//       alignItems="center"
//       spacing={0}
//     >
//       <Card sx={{ minWidth: 275 }}>
//         <CardContent>
//           <Button variant="text">Text</Button>
//           <Button variant="contained">Contained</Button>
//           <Button variant="outlined">Outlined</Button>
//           <div class="spinner-border" role="status">
//             <span class="visually-hidden">Loading...</span>
//           </div>
//         </CardContent>
//       </Card>
//     </Stack>
//   </Container>
// }

// ................bootstrap Registration form.................
