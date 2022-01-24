import React from "react";
import "../Login/login.css";
// import loginImg from "../../images/signup.svg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import CardContent from "@mui/material/CardContent";

const Signup = () => {
  return (
    <>
      <section>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          id="loginForm"
          spacing={2}
        >
          <Card>
            <CardContent>
              <Grid item xs={6}>
                <h1> hello</h1>
              </Grid>
              <Grid item xs={6}>
               
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </section>
    </>
  );
};

export default Signup;

//.......................................
{
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
                        required
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
                        required
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
                        required
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
                        required
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
}
