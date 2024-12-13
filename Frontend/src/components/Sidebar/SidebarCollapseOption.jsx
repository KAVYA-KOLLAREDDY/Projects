import { useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";

function SidebarCollapseOption({ option, unique }) {
  const [open, isOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => option?.url && navigate(option?.url)}
      style={{ cursor: `${option?.url ? "pointer" : ""}` }}
      className="position-relative"
    >
      {option?.badge && (
        <span
          className="badge position-absolute"
          style={{ right: "30px", top: "18px", backgroundColor: "rgb(77, 115, 151)" }}
        >
          4
        </span>
      )}
      <div
        onClick={() => option.options.length > 0 && isOpen((val) => !val)}
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${unique}`}
        className="d-flex align-items-center justify-content-between gap-2 py-3 border-bottom"
      >
        <div className="d-flex align-items-center gap-2 px-3">
          <div>{option.image}</div>
          <div>{option.name}</div>
        </div>
        <div className="me-2">
          {option.options.length > 0 &&
            (open === false ? <IoIosArrowBack /> : <IoIosArrowDown />)}
        </div>
      </div>
      {option.options.length > 0 && (
        <div>
          <div className="collapse" id={`collapse${unique}`}>
            <div className="card card-body border-0 p-0">
              {option.options.map((otherOpt, idx) => (
                <div key={idx} className="py-3 px-3 border-bottom">
                  <div
                    style={{ cursor: `${otherOpt?.url ? "pointer" : ""}` }}
                    onClick={() => {
                      otherOpt?.url && navigate(otherOpt.url);
                    }}
                  >
                    <IoIosArrowForward /> {otherOpt.option}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarCollapseOption;
