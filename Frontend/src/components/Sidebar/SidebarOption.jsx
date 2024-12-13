import { useState } from "react";
import SidebarMultiOption from "./SidebarMultiOption";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import "./SidebarOption.css";

function SidebarOption({ option }) {
  const [open, isOpen] = useState(false);
  return (
    <div className="sidebar-option">
      <div
        onClick={() => option.options.length > 0 && isOpen((val) => !val)}
        className="d-flex align-items-center justify-content-between gap-2 py-3 border-bottom"
      >
        <div className="d-flex align-items-center gap-2">
          <div>{option.image}</div>
          <div>{option.name}</div>
        </div>
        <div className="me-2">
          {option.options.length > 0 &&
            (open === false ? <IoIosArrowBack /> : <IoIosArrowDown />)}
        </div>
      </div>
      {open && option.options.length > 0 && (
        <div className="multi-opt">
          {option.options.map((otherOpt, idx) => (
            <SidebarMultiOption key={idx} multiOption={otherOpt} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SidebarOption;
