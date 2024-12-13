import { IoMenu } from "react-icons/io5";

function ButtonCard({ title, children }) {
  return (
    <div className="card mt-2 rounded-0">
      <div className="card-header">
        <div className="d-flex gap-2 align-items-center">
          <div>
            <IoMenu size={25} />
          </div>
          <div className="fw-bold text-muted">{title}</div>
        </div>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default ButtonCard;
