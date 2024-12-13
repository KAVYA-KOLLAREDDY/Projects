import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="row">
        <div className="col p-0">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="d-none d-lg-block col-3">
          <Sidebar />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
