import { BsExclamationTriangleFill } from "react-icons/bs";

function F404() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card" style={{ width: "500px" }}>
        <div className="card-body text-center">
          <BsExclamationTriangleFill size={100} fill="red" />
          <div className="fs-3  mt-2 fw-semibold">404!</div>
          <div>Page Not Found!</div>
        </div>
      </div>
    </div>
  );
}

export default F404;
