import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./../../assets/images/BetaLogo.png";
import "../../styles/Admin Styles/AdminSideBar.css";
import AllProp from "./../../assets/images/allprop.png";
import Addnew from "./../../assets/images/addnew.png";
import Dashboard from "./../../assets/images/dashboard.png";
// import { MdArrowForwardIos } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { CiGrid42 } from "react-icons/ci";
import { GiModernCity } from "react-icons/gi";

const AdminSideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  const OpenSideBar = () => {
    setSidebarOpen(true);
  };

  const CloseSideBar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <button
        className=" arrow-right d-lg-none bg-success-subtle border-0 p-2 rounded align-items-center mt-4 ms-1"
        onClick={OpenSideBar}
      >
        <TiThMenu className=" fs-4 text-success " />
      </button>
      <div
        className={
          sidebarOpen
            ? "slideIn AdminSidebarWrapper d-flex flex-column"
            : "AdminSidebarWrapper d-flex flex-column"
        }
      >
        <div>
          <img src={Logo} alt="logo" className="AdminNavLogo" />

          <button
            className="d-lg-none bg-success-subtle border-0 p-2 rounded"
            onClick={CloseSideBar}
          >
            <IoClose className=" fs-4 text-success " />
          </button>
        </div>

        <div className="AdminSideBarLinks d-flex flex-column align-items-center justify-content-center ">
          <Link
            to="/admin/dashboard"
            className={
              location.pathname === "/admin/dashboard"
                ? "d-flex flex-column align-items-center justify-content-center AdminActiveClass"
                : "d-flex flex-column align-items-center justify-content-center "
            }
          >
            <CiGrid42 className="fs-4" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/properties"
            className={
              location.pathname === "/admin/properties"
                ? "d-flex flex-column align-items-center justify-content-center AdminActiveClass"
                : "d-flex flex-column align-items-center justify-content-center "
            }
          >
            <GiModernCity className="fs-4" />
            <span>All Properties</span>
          </Link>
          <Link
            to="/admin/add"
            className={
              location.pathname === "/admin/add"
                ? "d-flex flex-column align-items-center justify-content-center AdminActiveClass"
                : "d-flex flex-column align-items-center justify-content-center "
            }
          >
            <GiModernCity className="fs-4" />
            <span>Add New Property</span>
          </Link>
          <Link
            to="/admin/inspection"
            className={
              location.pathname === "/admin/inspection"
                ? "d-flex flex-column align-items-center justify-content-center AdminActiveClass"
                : "d-flex flex-column align-items-center justify-content-center "
            }
          >
            <GiModernCity className="fs-4" />
            <span>Inspection History</span>
          </Link>
        </div>

        <div>
          <p className="text-secondary text-center">
            Copyright &copy; {new Date().getFullYear()} BetaHouse
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
