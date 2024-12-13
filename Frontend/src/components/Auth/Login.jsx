import { FaFacebook, FaGoogle, FaTwitter, FaUser } from "react-icons/fa";
import Button from "../Button/Button";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, isLoading] = useState(false);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    isLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <>
      {/* <h2 className="text-center mt-5 fs-3">MY3 SUPPORT</h2> */}
      <div className="d-flex justify-content-center mt-2">
        <img
          src="logo.png"
          width={200}
          className="object-fit-cover"
          height={100}
          alt=""
        />
      </div>
      <div className="container w-50 mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6" style={{ width: "450px" }}>
            <div className="card w-100 rounded-0">
              <div
                className="card-header bg-white rounded-0 border-bottom-0"
                style={{ borderTop: "5px solid rgb(77, 115, 151)" }}
              >
                <h6 className="text-center bg-white text-black fs-3 mt-3">
                  Sign In to your Account
                </h6>
              </div>
              <div className="card-body">
                <form id="LoginForm" action="" onSubmit={handleLogin}>
                  <div className="input-group mt-4">
                    <span className="input-group-text">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="Username"
                      placeholder="Username"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="input-group my-4">
                    <span className="input-group-text">
                      <RiLockPasswordFill />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="Username"
                      placeholder="Password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="row my-4 border-bottom pb-3">
                    <div className="col-6">
                      <div className="form-check ms-1 mt-2">
                        <span className="me-2">Remember me</span>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        ></label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex justify-content-end">
                        <Button
                          className="primary px-3"
                          disabled={loading ? true : false}
                        >
                          {!loading && "Sign In"}
                          {loading && (
                            <div className="d-flex align-items-center gap-2">
                              <div>Signing in .... </div>
                              <div
                                className="spinner-border spinner-border-sm"
                                role="status"
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            </div>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="row border-2">
                  <div className="col">
                    <div className="text-center border-1 fw-semibold">
                      Forgot Password?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 border-0 p-0 m-0">
              <h6 className="text-center mb-3">OR</h6>
              <div className="d-flex flex-column gap-2">
                <div>
                  <Button disabled className="primary full d-flex align-items-center gap-2 justify-content-center">
                    <FaFacebook /> Sign In With Facebook
                  </Button>
                </div>
                <div>
                  <Button disabled className="info full d-flex align-items-center gap-2 justify-content-center">
                    <FaTwitter /> Sign In With Twitter
                  </Button>
                </div>
                <div>
                  <Button disabled className="danger full d-flex align-items-center gap-2 justify-content-center">
                    <FaGoogle /> Sign In With Google
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
