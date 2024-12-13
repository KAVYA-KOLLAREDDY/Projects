import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 custom-nav">
        <div className="container-fluid">
          <div
            className="navbar-brand d-flex align-items-center gap-2"
            href="#"
          >
            <div>
              <img
                src="ramayyalogo.png"
                width={95}
                height={50}
                className="object-fit-cover"
                alt=""
              />
            </div>
            <a
              className="nav-link active d-lg-none d-block"
              aria-current="page"
              href="#"
            >
              <i
                className="bi bi-list"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
              ></i>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="ms-0 ms-lg-5 collapse navbar-collapse"
            style={{ height: "60px" }}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-lg-5">
              <button>
                <li className="nav-item d-flex align-items-center mx-2 pt-2 mb-1">
                  Dashboard
                </li>
              </button>

              <button className="mb-1">
                <li className="nav-item d-flex dropdown mx-2 mt-0 p-0">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu p-0 mt-2 ">
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-person-fill pe-1 text-black"></i>
                        Example #1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item border-bottom" href="#">
                        <i
                          className="bx bx-calendar pe-1"
                          style={{ color: "black" }}
                        ></i>
                        Example #2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i
                          className="bi bi-hdd-stack-fill pe-1"
                          style={{ color: "black" }}
                        ></i>
                        Example #3
                      </a>
                    </li>
                  </ul>
                </li>
              </button>
            </ul>
            <ul className="navbar-nav ms-auto d-lg-flex align-items-lg-center m-0">
              <button className="d-flex justify-content-start">
                <li className="nav-item d-flex me-3 ">
                  <div className="dropdown" role="button">
                    <div
                      className="position-relative"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-exclamation-triangle fs-4"></i>
                      <span
                        style={{ fontSize: "8px", top: "4px" }}
                        className="position-absolute start-100 translate-middle small badge rounded-2 bg-danger"
                      >
                        99
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </div>
                    <ul className="position-absolute z-3 dropdown-menu dropdown-menu-lg-end p-0 mt-1">
                      <li className="dropdown-header">
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ color: "white" }}
                        >
                          You have 5 new notifications
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          <div className="d-flex gap-1 justify-content-between">
                            <div className="iconStyle d-flex">
                              <i className="bx bx-plus fs-2 p-1"></i>
                            </div>
                            <div className="pt-2 pe-4 me-4">
                              <span style={{ color: "black" }}>
                                New user registration.
                              </span>
                            </div>
                            <div className="mt-2" style={{ color: "black" }}>
                              1mins
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          <div className="d-flex gap-2">
                            <div className="iconStyle iconStyle2 ">
                              <i className="bi bi-exclamation-triangle fs-5 pt-2"></i>
                            </div>
                            <div className="mt-2" style={{ color: "black" }}>
                              High CPU load on cluster #2.
                            </div>
                            <div className="mt-2" style={{ color: "black" }}>
                              5mins
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          <div className="d-flex gap-1 justify-content-between">
                            <div className="iconStyle d-flex">
                              <i className="bx bx-plus fs-2 p-1"></i>
                            </div>
                            <div className="pt-2 pe-4 me-3">
                              <span style={{ color: "black" }}>
                                New user registration.
                              </span>
                            </div>
                            <div className="mt-2" style={{ color: "black" }}>
                              10mins
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          <div className="d-flex gap-1 justify-content-between">
                            <div className="iconStyle iconStyle3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-megaphone"
                                viewBox="0 0 16 16"
                              >
                                <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z" />
                              </svg>
                            </div>
                            <div className="pt-2 pe-4">
                              <span style={{ color: "black" }}>
                                New items are in queue.
                              </span>
                            </div>
                            <div className="mt-2" style={{ color: "black" }}>
                              25mins
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          <div className="d-flex gap-1 justify-content-between">
                            <div className="iconStyle iconStyle4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-lightning"
                                viewBox="0 0 12 16"
                              >
                                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z" />
                              </svg>
                            </div>
                            <div className="pt-2 pe-4 me-2">
                              <span style={{ color: "black" }}>
                                {" "}
                                Disk space to 85% full.
                              </span>
                            </div>
                            <div className="mt-2" style={{ color: "black" }}>
                              55mins
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className=" dropdown-footer">
                        <a className="dropdown-item text-center" href="#">
                          View all notifications
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </button>

              <button>
                <li className="nav-item d-flex me-3">
                  <div className="dropdown" role="button">
                    <div
                      className="position-relative"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="30"
                        style={{ fill: "white" }}
                      >
                        <path d="M10.75 6.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5ZM6 7.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 7.25Zm4 9a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-3.25-.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z"></path>
                        <path d="M3.25 2h17.5c.966 0 1.75.784 1.75 1.75v7c0 .372-.116.716-.314 1 .198.284.314.628.314 1v7a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75v-7c0-.358.109-.707.314-1a1.741 1.741 0 0 1-.314-1v-7C1.5 2.784 2.284 2 3.25 2Zm0 10.5a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25Zm0-1.5h17.5a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25H3.25a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25Z"></path>
                      </svg>
                      <span
                        style={{ fontSize: "8px", top: "0px" }}
                        className="position-absolute start-100 translate-middle small badge rounded-2 bg-danger"
                      >
                        99
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    <ul className="position-absolute z-3 dropdown-menu dropdown-menu-start dropdown-menu-lg-end p-0 mt-2">
                      <li className="dropdown-header">
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ color: "white" }}
                        >
                          You have 7 pending tasks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          <div className="d-flex flex-row justify-content-between">
                            <div style={{ color: "black" }}>
                              Prepare new release
                            </div>
                            <div style={{ color: "black" }}>30%</div>
                          </div>

                          <div
                            className="progress rounded-0"
                            role="progressbar"
                            aria-label="Example 20px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: "13px", width: "230px" }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "25%" }}
                            ></div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          <div className=" d-flex justify-content-between">
                            <div style={{ color: "black" }}>
                              Change management
                            </div>
                            <div style={{ color: "black" }}>80%</div>
                          </div>
                          <div
                            className="progress rounded-0"
                            role="progressbar"
                            aria-label="Example 20px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: "13px" }}
                          >
                            <div
                              className="progress-bar progress-bar-striped bg-danger"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          <div className="d-flex flex-row justify-content-between">
                            <div style={{ color: "black" }}>
                              Mobile development
                            </div>
                            <div style={{ color: "black" }}>60%</div>
                          </div>

                          <div
                            className="progress rounded-0"
                            role="progressbar"
                            aria-label="Example 20px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: "13px" }}
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex flex-row justify-content-between">
                            <div style={{ color: "black" }}>
                              Database migration
                            </div>
                            <div style={{ color: "black" }}>20%</div>
                          </div>

                          <div
                            className="progress rounded-0"
                            role="progressbar"
                            aria-label="Example 20px high"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: "13px" }}
                          >
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: "25%" }}
                            ></div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    </div>
                  </div>
                </li>
              </button>
              <button>
                <li className="mt-1 nav-item d-flex me-3">
                  <div className="dropdown">
                    <div
                      className="position-relative"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bx bx-envelope fs-2"></i>
                      <span
                        style={{ fontSize: "8px", top: "3px" }}
                        className="position-absolute start-100 translate-middle small badge rounded-2 bg-danger"
                      >
                        99
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </div>
                    <ul className="position-absolute z-3 dropdown-menu dropdown-menu-lg-end p-0">
                      <li className="dropdown-header">
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ color: "white" }}
                        >
                          You have 3 new messages
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          <div className="d-flex gap-2 flex-row justify-content-between">
                            <div>
                              <img
                                src="beauty.png"
                                className="rounded-0"
                                height="42px"
                                width="40px"
                              ></img>
                            </div>
                            <div style={{ color: "black" }}>
                              <b style={{ color: "black" }}>Bob Carterbr </b>
                              <br></br>
                              Consetetur sadicing elitr..
                            </div>
                            <div style={{ color: "black" }}>Just Now</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          <div className="d-flex flex-row justify-content-between">
                            <div>
                              <img
                                src="beauty.png"
                                className="rounded-0"
                                height="42px"
                                width="40px"
                              ></img>
                            </div>
                            <div style={{ color: "black" }}>
                              <b style={{ color: "black" }}>Jone Deo</b>
                              <br></br>
                              Sedhh diam nonumy elitr...
                            </div>
                            <div style={{ color: "black" }}>45 mins </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          <div className="d-flex flex-row justify-content-between">
                            <div>
                              <img
                                src="beauty.png"
                                className="rounded-0"
                                height="42px"
                                width="40px"
                              ></img>
                            </div>
                            <div style={{ color: "black" }}>
                              <b style={{ color: "black" }}>Patrick Nilson </b>
                              <br></br>
                              No sea takimata sanctuss...
                            </div>
                            <div style={{ color: "black" }}>6 hours</div>
                          </div>
                        </a>
                      </li>
                      <li
                        className="dropdown-footer text-center pb-2"
                        style={{ color: "black" }}
                      >
                        <a className="dropdown-item" href="#"></a>View all
                        messages
                      </li>
                    </ul>
                  </div>
                </li>
              </button>
              <button>
                <li className="nav-item d-flex me-2">
                  <i className="bi bi-arrows-vertical fs-4"></i>
                </li>
              </button>

              <button>
                <li
                  className="nav-item me-2 d-flex align-items-center dropdown"
                  role="button"
                >
                  <a
                    href="#"
                    className="d-flex align-items-center text-decoration-none"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bx bx-folder-open fs-5"></i>
                    <span style={{ fontSize: "17px" }}>Projects</span>
                  </a>
                  <ul
                    className="position-absolute z-3 dropdown-menu dropdown-menu-end project-dropdown mt-2"
                    aria-labelledby="projectsDropdown"
                  >
                    {/* dropdown-menu-lg-end d-flex flex-row justify-content-between*/}
                    <div className="d-flex m-5 text-center">
                      <li className="border-right mt-2">
                        <a className="dropdown-item " href="#">
                          <div className="d-flex flex-column align-items-center">
                            <i className="bx bx-laptop  fs-1 mt-2"></i>
                            <span>Lorem ipsum dolor</span>
                          </div>
                        </a>
                      </li>
                      <li className="mt-2">
                        <a className="dropdown-item" href="#">
                          <div className="d-flex flex-column align-items-center">
                            <i className="bx bxs-bullseye fs-1 mt-2"></i>
                            <span>Dolor sit incididunt</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex flex-column align-items-center">
                            <i className="bi bi-person-standing me-3 fs-1"></i>
                            <span>Consectetur adipiscing elit</span>
                          </div>
                        </a>
                      </li>
                      <li className="mt-0">
                        <a className="dropdown-item" href="#">
                          <div className="d-flex flex-column align-items-center">
                            <i className="bi bi-hand-thumbs-up me-3 fs-1"></i>
                            <span>Sed diam nonumy</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex flex-column align-items-center">
                            <i className="bi bi-person-standing-dress me-3 fs-1"></i>
                            <span>At vero eos et</span>
                          </div>
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
              </button>
              <button>
                <li className="text-start nav-item me-2 dropdown mb-1">
                  <i className="bi bi-person-standing pe-1 fs-5 "></i>
                  <b className="dropdown-toggle" data-bs-toggle="dropdown">
                    Harish Kurisetty
                  </b>
                  <ul className=" position-absolute z-3 dropdown-menu p-0 mt-2">
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("profile")}
                      >
                        <i
                          className="bi bi-person-fill pe-2"
                          style={{ color: "black" }}
                        ></i>
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i
                          className="bx bx-calendar pe-2"
                          style={{ color: "black" }}
                        ></i>
                        My Calendar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item border-bottom" href="#">
                        <i
                          className="bi bi-hdd-stack-fill pe-2"
                          style={{ color: "black" }}
                        ></i>
                        My Tasks
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => navigate("/login")}
                      >
                        <i
                          className="bx bxs-key bx-rotate-270 pe-2"
                          style={{ color: "black" }}
                        ></i>
                        LogOut
                      </a>
                    </li>
                  </ul>
                </li>
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div
          className="offcanvas offcanvas-start"
          style={{ width: "300px" }}
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Dashboard
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
