export default function Card({ image, name, count, footer }) {
  return (
    <div className="card mt-2 mt-lg-0">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src={image}
              width={70}
              className="object-fit-cover"
              height={50}
              alt=""
            />
          </div>
          <div>
            <div className="text-muted text-end" style={{ fontSize: "12px" }}>
              {name.toUpperCase()}
            </div>
            <div className="fw-semibold fs-4 text-end">{count}</div>
          </div>
        </div>
      </div>
      <div className="card-footer text-muted">
        <div className="d-flex justify-content-between">
          <div style={{ fontSize: "13px" }}>{footer.toUpperCase()}</div>
          <span className="dropend">
            <span className="dropdown-toggle" data-bs-toggle="dropdown"></span>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
