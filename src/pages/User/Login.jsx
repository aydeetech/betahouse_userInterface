// import House from "../../assets/images/House.png";
import "../../styles/User Styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import House from "../../assets/images/House.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
// import "../../styles/Admin Styles/AdminSignupForm.css";
// import search from "../../assets/images/search.png";

const Login = () => {
  const {isDark} = useGlobalContext()
  return (
    <div className={isDark ? "DarkMode" : null}>
    <div className=" vh-100 overflow-y-hidden d-flex justify-content-center w-100">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="input-field p-3 p-md-5 col-12">
        <div className="header lh-1 mb-4 text-center text-md-start">
          <p className="text fw-bold fs-4">Welcome Back to Betahouse</p>
          <p>Enter your details to access your account</p>
        </div>
        <form className="inputs ">
          <div className="mb-3">
            <label htmlFor="email1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control active shadow-none"
              placeholder="mickietyronne@gmail.com"
              id="email"
            />
          </div>

          <div className="mb-3">
            <div className="password-field d-flex justify-content-between ">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <span className="text-danger">Forgot Password?</span>
            </div>
            <input type="password" className="form-control shadow-none " id="password"  />
          </div>

          <div className="form-check py-2">
            <input
              className="form-check-input shadow-none "
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label " htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>

          <button
            type="button"
            className="btn btn-success text-center w-100 btn-lg"
          >
            Sign in
          </button>
        </form>
        <p className="text-center pt-3 fw-bold">or</p>
        <button type="button" className="btn btn-outline-success w-100 mb-3 d-flex justify-content-center align-items-center gap-2">
          {/* <img src={search} alt="" className="google-icon px-2 pb-1" /> */}
          <FcGoogle />
          Continue with Google
        </button>
        <p>
          New user?{" "}
          <Link to="/signup" className="fw-bold text-success">
            Sign up
          </Link>
        </p>
      </div>
      </div>
      <img
        src={House}
        alt="House Image"
        className=" w-50 rounded-left d-none d-md-block "
      />
    </div>
    </div>
  );
};

export default Login;
