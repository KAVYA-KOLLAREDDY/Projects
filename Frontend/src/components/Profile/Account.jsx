export default function Account() {
  return (
    <>
      <div className="row mt-3">
        <div className="col">
          <div className="fw-semibold">General Information</div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <div className="row px-5">
            <div className="col-6">
              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  First name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    value="John"
                    id="inputPassword"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  Gender:
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3 row">
                <label
                  htmlFor="lName"
                  className="col-sm-2 col-form-label"
                >
                  Last name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="lName"
                    value="doe"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3 row">
                <label
                  htmlFor="age"
                  className="col-sm-2 col-form-label"
                >
                  Age:
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control rounded-0"
                    id="age"
                    value={25}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="fw-semibold">Settings</div>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <label
              htmlFor="inputPassword"
              className="col-sm-2 col-form-label py-0"
            >
              <div className="fw-semibold">Permanent Username</div>
              <div className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>
            </label>
            <div className="col-sm-10">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Username
                </label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value="John.Doe"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <label
              htmlFor="inputPassword"
              className="col-sm-2 col-form-label py-0"
            >
              <div className="fw-semibold">Change Password</div>
              <div className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>
            </label>
            <div className="col-sm-10">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Old password
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="exampleFormControlInput1"
                  placeholder="Leave empty for no-password change"
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-2"></div>
            <div className="col-sm-10">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  New Password
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="exampleFormControlInput1"
                  placeholder="Leave empty for no-password change"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
