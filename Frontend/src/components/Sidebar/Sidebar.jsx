import { AiFillDashboard } from "react-icons/ai";
import { MdComputer, MdInsertPageBreak } from "react-icons/md";
import { CiFolderOn, CiViewTable } from "react-icons/ci";
import SidebarCollapseOption from "./SidebarCollapseOption";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { GoAlertFill } from "react-icons/go";
import { FaEnvelope, FaPlus } from "react-icons/fa";

function Sidebar() {
  const sidebarOptions = [
    {
      name: "Dashboard",
      url: "/",
      image: <AiFillDashboard size={20} />,
      options: [],
    },
    {
      name: "UI Features",
      image: <MdComputer size={20} />,
      badge: "6",
      options: [
        {
          option: "Buttons",
          url: "buttons",
        },
      ],
    },
    {
      name: "Form Elements",
      image: <HiMiniPencilSquare />,
      options: [{ option: "Form Components", url: "forms" }],
    },
    {
      name: "Tables",
      image: <CiViewTable size={20} />,
      options: [
        { option: "Tables", url: "tables" },
        { option: "Table1", url: "tab1" },
        { option: "Table2", url: "tab2" },
        { option: "Table3", url: "tab3" },
        { option: "Table4", url: "tab4" },
      ],
    },
    {
      name: "Pages",
      image: <MdInsertPageBreak size={20} />,
      options: [
        { option: "Login", url: "login" },
        { option: "User Profile", url: "profile" },
        { option: "404 Page", url: "" },
      ],
    },
    {
      name: "Resource Management",
      image: <CiFolderOn size={20} />,
      options: [
        {
          option: ".....",
        },
      ],
    },
    {
      name: "Asset Management",
      image: <CiFolderOn size={20} />,
      options: [
        {
          option: ".....",
        },
      ],
    },
  ];

  return (
    <div className="card rounded-0 border-bottom-0 h-100">
      <div className="card-header min-vh-100 p-0" style={{ height: "100%" }}>
        <div className="sidebar">
          <div className=" px-2 my-2 bg-light-subtle">
            <div
              style={{ borderBottom: "1px solid gray" }}
              className="d-flex p-2"
            >
              <input
                type="text"
                className="w-100 bg-transparent"
                style={{ border: "none", outline: "none" }}
                placeholder="search..."
              />
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
            </div>
          </div>

          {sidebarOptions.map((option, idx) => (
            // <SidebarOption key={idx} option={option} />
            <SidebarCollapseOption key={idx} option={option} unique={idx} />
          ))}
        </div>
        <div
          className="py-3 px-2 fw-semibold"
          style={{ backgroundColor: "white" }}
        >
          Notifications
        </div>
        <div className="row my-3">
          <div className="col">
            <div className="px-2 d-flex gap-1">
              <div className="mt-2 px-2">
                <div className="px-2 py-1" style={{ backgroundColor: "red" }}>
                  <GoAlertFill size={20} fill="white" />
                </div>
              </div>
              <div>
                <div>
                  Server <span className="fw-bold">#512</span> Crashed
                </div>
                <div className="text-muted mt-1">Few Seconds Ago</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <div className="px-2 d-flex gap-1">
              <div className="mt-2 px-2">
                <div
                  className="px-2 py-1"
                  style={{ backgroundColor: "rgb(77, 115, 151)" }}
                >
                  <FaEnvelope size={15} fill="white" />
                </div>
              </div>
              <div>
                <div>
                  <span className="fw-bold">John</span> sent you a message
                </div>
                <div className="text-muted mt-1">Few Seconds Ago</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <div className="px-2 d-flex gap-1">
              <div className="mt-2 px-2">
                <div
                  className="px-2 py-1"
                  style={{ backgroundColor: "lightgreen" }}
                >
                  <FaPlus size={15} fill="white" />
                </div>
              </div>
              <div>
                <div>
                  <span className="fw-bold">Emma's</span> account was created
                </div>
                <div className="text-muted mt-1">4 hours ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
