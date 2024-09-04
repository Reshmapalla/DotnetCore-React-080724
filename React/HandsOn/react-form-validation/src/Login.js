import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Import the custom CSS for styles

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const Validate = async (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    let user = { email: values.email, password: values.password };

    try {
      const response = await axios.post(
        "http://localhost:5089/api/Authenticate/ValidUser",
        user
      );
      if (!response.data.token) {
        setErrors({ password: "Invalid User Credentials" });
      } else {
        let user = response.data;
        sessionStorage.setItem("token", user.token);
        localStorage.setItem("userId", user.userId); // Store user ID in local storage
        if (user.role === "Admin") {
          navigate("/admin-dashboard");
        } else if (user.role === "Customer") {
          navigate("/user-dashboard");
        }
      }
    } catch (error) {
      console.error("There was an error during login:", error);
      setErrors({ email: "An error occurred. Please try again." });
    }
    setSubmitting(false);
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="login-page">
      {/* Header */}
      <header className="header-animate">
        <h1 className="title-animate">Jeans Station</h1>
      </header>

      {/* Main Content */}
      <div className="container mt-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card form-animate">
              <div className="card-header text-center bg-secondary text-white">
                <h3>Login</h3>
              </div>
              <div className="card-body p-4">
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={Validate}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className="form-control input-animate"
                          placeholder="Enter your email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="alert alert-danger mt-1"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          className="form-control input-animate"
                          placeholder="Enter your password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="alert alert-danger mt-1"
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-warning btn-animate"
                          onClick={refreshPage}
                        >
                          Refresh
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary btn-animate mx-auto"
                          disabled={isSubmitting}
                        >
                          Login
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-animate"
                          onClick={navigateToRegister}
                        >
                          Register
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-animate">
        <p>&copy; 2024 Jeans Station. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
