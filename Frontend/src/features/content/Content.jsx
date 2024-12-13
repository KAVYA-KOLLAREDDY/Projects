import Button from "../../components/Button/Button";
import Card from "../../components/helpers/Card";
import "./Content.css";

function Content() {
  return (
    <div className="col pe-0" style={{ backgroundColor: "#E0E0E0" }}>
      <div className="row">
        <div className="col ps-0">
          <div className="card" style={{ borderRadius: 0 }}>
            <div className="card-header p-0 px-3">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-house-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                  </svg>
                  <span className="text-dark">Dashboard</span>
                  <span className="ms-2 text-dark"> &gt; Calendar</span>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-start justify-content-lg-end gap-3">
                    <div className="d-flex align-items-center border-end border-start pe-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 100 50"
                        className="ms-3 me-1"
                      >
                        <rect
                          x="0"
                          y="40"
                          width="10"
                          height="10"
                          fill="currentColor"
                        />
                        <rect
                          x="15"
                          y="35"
                          width="10"
                          height="15"
                          fill="currentColor"
                        />
                        <rect
                          x="30"
                          y="30"
                          width="10"
                          height="20"
                          fill="currentColor"
                        />
                        <rect
                          x="45"
                          y="25"
                          width="10"
                          height="25"
                          fill="currentColor"
                        />
                        <rect
                          x="60"
                          y="20"
                          width="10"
                          height="30"
                          fill="currentColor"
                        />
                        <rect
                          x="75"
                          y="15"
                          width="10"
                          height="35"
                          fill="currentColor"
                        />
                        <rect
                          x="90"
                          y="10"
                          width="10"
                          height="40"
                          fill="currentColor"
                        />
                      </svg>

                      <span className="text-dark">Statistics</span>
                    </div>
                    <div className="d-flex align-items-center border-end pe-2 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-menu-button-wide me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.5 10a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2z" />
                      </svg>
                      <div>Users(+3) </div>
                    </div>
                    <div className="d-flex align-items-center border-end me-2 pe-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-calendar-range-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 7V5H0v5h5a1 1 0 1 1 0 2H0v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9h-6a1 1 0 1 1 0-2z" />
                      </svg>
                      <span className="text-dark">
                        {new Date().toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-3 py-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="fs-3 text-muted">Administrator Dashboard</div>
                  <div className="text-muted">Good Morning John!</div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6 mt-3 mt-lg-0">
                      <div className="mt-2 mt-lg-0 d-flex align-items-center">
                        <div>
                          <div>All Employees</div>
                          <div className="fs-5 fw-semibold">265+</div>
                        </div>
                        <div>
                          <img
                            src="garph2.png"
                            width={120}
                            height={60}
                            alt="Hey!"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-3 mt-lg-0">
                      <div className="mt-3 mt-lg-0 d-flex align-items-center">
                        <div>
                          <div>Organization Assets</div>
                          <div className="fs-5 fw-semibold">$21,561.21</div>
                        </div>
                        <div>
                          <img
                            src="graph1.png"
                            width={120}
                            height={60}
                            alt="Hey!"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer px-3 py-5">
              {/* Cards */}
              <div className="row pe-2">
                <div className="col-md-4 mt-2 col-lg-6 col-xl-3">
                  <Card
                    image="PI.jpeg"
                    name="Employees"
                    count="265+"
                    footer="Manage Employees"
                  />
                </div>
                <div className="col-md-4 mt-2 col-lg-6 col-xl-3">
                  <Card
                    image="PI2.jpeg"
                    name="Assets"
                    count="714+"
                    footer="ASSET MANAGEMENT"
                  />
                </div>
                <div className="col-md-4 mt-2 col-lg-6 col-xl-3">
                  <Card
                    image="PI3.jpeg"
                    name="Projects"
                    count="11+"
                    footer="Project Management"
                  />
                </div>
                <div className="col-md-4 mt-2 col-lg-6 col-xl-3">
                  <Card
                    image="P4.jpeg"
                    name="Organization Data"
                    count="2 521 719"
                    footer="Data Management"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-0">
            <div className="card-body">
              <div className="row p-2">
                <div className="col-md-6">
                  {/* Table */}
                  <div className="card">
                    <div className="card-header p-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="my-2 ms-1 fw-bold d-flex align-items-center gap-2">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              className="bi bi-list"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                              />
                            </svg>
                          </div>
                          <div>All Employees</div>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <div
                            style={{
                              border: "1px solid lightgray",
                              height: "3rem",
                              width: 0,
                            }}
                          ></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="15"
                            fill="currentColor"
                            className="bi bi-chevron-down me-2"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <table className="table table-striped table-hover table-responsive align-middle w-100 m-0">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Approve</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </td>
                            <td>Joey</td>
                            <td>Greyson</td>
                            <td>
                              <Button className="success mini" disabled>
                                Approved
                              </Button>
                            </td>
                            <td>
                              <Button className="default px-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-check-lg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </td>
                            <td>Wolf</td>
                            <td>Bud</td>
                            <td>
                              <Button className="primary mini" disabled>
                                Pending
                              </Button>
                            </td>
                            <td>
                              <Button className="default px-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-check-lg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </td>
                            <td>Darin</td>
                            <td>Alec</td>
                            <td>
                              <Button className="warning mini" disabled>
                                Suspended
                              </Button>
                            </td>
                            <td>
                              <Button className="default px-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-check-lg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </td>
                            <td>Andrea</td>
                            <td>Brenden</td>
                            <td>
                              <Button className="danger mini" disabled>
                                Blocked
                              </Button>
                            </td>
                            <td>
                              <Button className="default px-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-check-lg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div
                        className="d-flex gap-2 ps-3 py-3 align-items-center"
                        style={{ backgroundColor: "#f9f9f9" }}
                      >
                        <div>Apply action:</div>
                        <select
                          id="action"
                          className="form-select rounded-0 w-auto"
                        >
                          <option>Select action...</option>
                          <option>Approve</option>
                          <option>Reject</option>
                          <option>Suspend</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-2 mt-lg-0">
                  <div
                    className="row"
                    style={{
                      borderBottom: "1px solid rgb(202, 196, 196)",
                      marginBottom: "15px",
                      marginTop: "1px",
                    }}
                  >
                    <div className="col mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-list"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                      </svg>
                      <b className="fs-6">Feeds</b>
                    </div>
                    <div className="col text-end">
                      <button
                        style={{
                          border: "1px solid rgb(174, 169, 169)",
                          padding: "1px",
                        }}
                      >
                        <div className="d-flex px-2">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="16"
                              fill="currentColor"
                              className="bi bi-chevron-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                              />
                            </svg>
                          </div>

                          <div>
                            <span className="border-separatorss"></span>
                          </div>

                          <div className="d-flex justify-content-center align-items-center ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="16"
                              fill="currentColor"
                              className="bi bi-arrow-repeat"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                              <path
                                fillRule="evenodd"
                                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                              />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="p-0 m-2 rounded-0" style={{ height: "300px", overflowX: "hidden", overflowY: "scroll" }}>
                    <div className="row d-flex gap-2 justify-content-between mb-2 row1">
                      <div className="col-8  d-flex gap-2">
                        <i className="bi bi-bell fs-6 pt-2 iconStyle"></i>
                        <span className="pt-2" style={{ color: "black" }}>You have 2 puzzles to solve.</span>
                      </div>
                      <div className="col-2 pt-2 text-end " style={{ color: "black", marginRight: "7px" }}>
                        Just now
                      </div>
                    </div>
                    <div className="row d-flex gap-2 justify-content-between mb-2 row1">
                      <div className="col-7  d-flex gap-2">
                        <i className='bx bx-plus fs-4 pt-2 iconStyle '></i>
                        <span className="pt-2" style={{ color: "black" }}>New user registered.</span>
                      </div>
                      <div className="col-3 pt-1 mt-1 text-end" style={{ color: "black", marginRight: "7px" }}>
                        20 mins ago
                      </div>
                    </div>
                    <div className=" row d-flex gap-2 justify-content-between align-items-start mb-2 row1">
                      <div className="col-7 d-flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="20"
                          fill="currentColor"
                          className="bi bi-megaphone iconStyle iconStyles3"
                          viewBox="0 0 25 18"
                        >
                          <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z" />
                        </svg>
                        <span className="pt-2" style={{ color: "black" }}>New items are in queue.</span>
                      </div>
                      <div className="col-3 pt-1 mt-1 text-end" style={{ color: "black", marginRight: "7px" }}>
                        25 mins ago
                      </div>
                    </div>
                    <div className="row d-flex gap-2 justify-content-between mb-2 row1 ">
                      <div className="col-7 d-flex gap-2">
                        <i className="bi bi-exclamation-triangle fs-5 pt-1 iconStyle iconStyle2 "></i>
                        <span className="pt-2"> High CPU load on cluster #2.</span>
                      </div>
                      <div className="col-3 pt-1 mt-1 text-end" style={{ color: "black", marginRight: "7px" }}>
                        30 mins ago
                      </div>
                    </div>
                    <div className="row d-flex gap-2 justify-content-between mb-2 row1">
                      <div className="col-7 d-flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-lightning iconStyle iconStyles4"
                          viewBox="0 0 20 16"
                        >
                          <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z" />
                        </svg>
                        <span className="pt-2" style={{ color: "black" }}> Disk space to 85% full.</span>

                      </div>
                      <div className="col-3 pt-1 mt-1 text-end" style={{ color: "black", marginRight: "7px" }}>
                        45 mins ago
                      </div>
                    </div>
                    <div className="row d-flex gap-2 justify-content-between mb-2 row1">
                      <div className="col-7  d-flex gap-2">
                        <i className='bx bx-plus fs-3 pt-2 iconStyle '></i>
                        <span className="pt-2" style={{ color: "black" }}>New user registered.</span>
                      </div>
                      <div className="col-3 mt-1 pt-1 text-end" style={{ color: "black", marginRight: "7px" }}>
                        1 hour ago
                      </div>
                    </div>
                    <div className="row d-flex gap-2 justify-content-between mb-2 row1">
                      <div className="col-7  d-flex gap-2">
                        <i className='bx bx-plus fs-3 pt-2 iconStyle iconStyle5'></i>
                        <span className="pt-2" style={{ color: "black" }}>Time successfully synced.</span>
                      </div>
                      <div className="col-3 pt-1 mt-1 text-end" style={{ color: "black", marginRight: "7px" }}>
                        1 hour ago
                      </div>
                    </div>
                    <div className="row d-flex gap-2 justify-content-between mb-2 mt-2 row1">
                      <div className="col-8  d-flex gap-2">
                        <i className="bi bi-bell fs-5 pt-1 iconStyle"></i>
                        <span className="pt-2" style={{ color: "black" }}>You have 2 puzzles to solve.</span>
                      </div>
                      <div className="col-2 pt-1 mt-1 text-end" style={{ color: "black", marginRight: "7px" }}>
                        Just now
                      </div>
                    </div>
                    <div className="row d-flex gap-2 justify-content-between mb-2 mt-2 row1">
                      <div className="col-8  d-flex gap-2">
                        <i className="bi bi-bell fs-5 pt-1 iconStyle"></i>
                        <span className="pt-2" style={{ color: "black" }}>You have 2 puzzles to solve.</span>
                      </div>
                      <div className="col-2 mt-1 pt-1 text-end" style={{ color: "black", marginRight: "7px" }}>
                        Just now
                      </div>
                    </div>
                    <div className="row d-flex gap-2 justify-content-between mb-2 mt-2 row1">
                      <div className="col-8  d-flex gap-2">
                        <i className="bi bi-bell fs-5 pt-1 iconStyle"></i>
                        <span className="pt-2" style={{ color: "black" }}>You have 2 puzzles to solve.</span>
                      </div>
                      <div className="col-2 mt-1 pt-1 text-end" style={{ color: "black", marginRight: "7px" }}>
                        Just now
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
