import Button from "../../components/Button/Button";

export default function Tables() {
  return (
    <div className="my-2">
      <div className="row px-2">
        <div className="col-md-6 mt-3 mt-lg-0">
            <div className="card">
            <div className="card-header">
                <b>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-list me-1 mb-1"
                    viewBox="0 0 16 16"
                >
                    <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>{" "}
                Simple Table
                </b>
            </div>
            <div className="card-body">
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-light">
                    <th scope="row">1</th>
                    <td>Joey</td>
                    <td>Greyson</td>
                    <td>joey123</td>
                    <td>
                        <Button className="success" disabled>
                        Approved
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Wolf</td>
                    <td>Bud</td>
                    <td>Wolfy</td>
                    <td>
                        <Button className="primary" disabled>
                        Pending
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Darin</td>
                    <td>Alec</td>
                    <td>alec82</td>
                    <td>
                        <Button className="warning" disabled>
                        Suspended
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Andrea</td>
                    <td>Alec</td>
                    <td>alec82</td>
                    <td>
                        <Button className="danger" disabled>
                        Blocked
                        </Button>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        <div className="col-md-6 mt-3 mt-lg-0">
            <div className="card">
            <div className="card-header">
                <b>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-list me-1 mb-1"
                    viewBox="0 0 16 16"
                >
                    <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>{" "}
                Striped Table
                </b>
            </div>
            <div className="card-body">
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Joey</td>
                    <td>Greyson</td>
                    <td>joey123</td>
                    <td>
                        <Button className="success" disabled>
                        Approved
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Wolf</td>
                    <td>Bud</td>
                    <td>Wolfy</td>
                    <td>
                        <Button className="primary" disabled>
                        Pending
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Darin</td>
                    <td>Alec</td>
                    <td>alec82</td>
                    <td>
                        <Button className="warning" disabled>
                        Suspended
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Andrea</td>
                    <td>Alec</td>
                    <td>alec82</td>
                    <td>
                        <Button className="danger" disabled>
                        Blocked
                        </Button>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
      </div>
      <div className="row px-2 mt-3">
        <div className="col-md-6 mt-3 mt-lg-0">
        <div className="card">
          <div className="card-header">
            <b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-list me-1 mb-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
              Bordered Table
            </b>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">UserName</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-light">
                  <th scope="row">1</th>
                  <td>Joey</td>
                  <td>Greyson</td>
                  <td>joey123</td>
                  <td>
                    <Button className="success" disabled>
                      Approved
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Wolf</td>
                  <td>Bud</td>
                  <td>Wolfy</td>
                  <td>
                    <Button className="primary" disabled>
                      Pending
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Darin</td>
                  <td>Alec</td>
                  <td>alec82</td>
                  <td>
                    <Button className="warning" disabled>
                      Suspended
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Andrea</td>
                  <td>Alec</td>
                  <td>alec82</td>
                  <td>
                    <Button className="danger" disabled>
                      Blocked
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
        <div className="col-md-6 mt-3 mt-lg-0">
            <div className="card">
            <div className="card-header">
                <b>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-list me-1 mb-1"
                    viewBox="0 0 16 16"
                >
                    <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>{" "}
                Condensed Table
                </b>
            </div>
            <div className="card-body">
                <table className="table table-sm">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Joey</td>
                    <td>Greyson</td>
                    <td>joey123</td>
                    <td>
                        <Button className="success" disabled>
                        Approved
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Wolf</td>
                    <td>Bud</td>
                    <td>Wolfy</td>
                    <td>
                        <Button className="primary" disabled>
                        Pending
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Darin</td>
                    <td>Alec</td>
                    <td>alec82</td>
                    <td>
                        <Button className="warning" disabled>
                        Suspended
                        </Button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Andrea</td>
                    <td>Alec</td>
                    <td>alec82</td>
                    <td>
                        <Button className="danger" disabled>
                        Blocked
                        </Button>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
