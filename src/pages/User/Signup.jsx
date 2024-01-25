import House from "../../assets/images/House.png";
import "../../styles/User Styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Hooks/useGlobalContext";

// import search from "../assets/search.png";

const Signup = () => {
  const {isDark} = useGlobalContext()

  return <div className={isDark ? "DarkMode" : null}>
    <div className="signup-container d-flex vh-100 justify-content-center">
     

    <div className="col-md-6 d-flex justify-content-center  align-items-center">
      <div className="input-field p-3 p-md-5">
        <div className="header lh-1 mb-4 text-center text-md-start">
          <p className="text fw-bold fs-4  ">
            Join our community of home seekers and explore the possibilities
            that await.
          </p>
          <p>Lets get started by filling out the information below</p>
        </div>
        <form className="inputs ">
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="First name">Frist name</label>
              <input
                type="text"
                className="form-control shadow-none "
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <label htmlFor="Last name">Last name</label>
              <input
                type="text"
                className="form-control shadow-none "
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control shadow-none "
              placeholder="mickietyronne@gmail.com"
              id="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control shadow-none " id="password" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input type="password" className="form-control shadow-none" id="password" />
          </div>

          <div className="form-check py-2 mb-3">
            <input
              className="form-check-input shadow-none"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label " htmlFor="flexCheckDefault">
              I agree to <a href="#">Terms of Service </a> and{" "}
              <a href="#">Privacy Policies</a>
            </label>
          </div>

          <button
            type="button"
            className="btn btn-success text-center w-100 btn-lg"
          >
            Sign up
          </button>
        </form>
        <p className="text-center pt-3 fw-bold">or</p>
        <button type="button" className="btn btn-outline-success w-100 mb-3 d-flex gap-2 justify-content-center align-items-center">
          {/* <img src={search} alt="" className="google-icon px-2 pb-1" /> */}
          <FcGoogle />
          Continue with Google
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="fw-bold text-success">
            Sign in
          </Link>
        </p>
      </div>
      </div>
      
      <img
        src={House}
        alt="House Image"
        className=" w-50 rounded-left h-100  d-none d-md-block "
      />
    </div>
    </div>
};

export default Signup;
