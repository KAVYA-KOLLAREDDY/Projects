import { IoIosSettings } from "react-icons/io";
import Button from "../../components/Button/Button";
import ButtonCard from "./ButtonCard";
import { FaBook } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsFillHouseFill } from "react-icons/bs";

function convertName(name) {
  return String(name).charAt(0).toUpperCase() + String(name).slice(1);
}

export default function Buttons() {
  let basicBtnClasses = [
    "default",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "inverse",
  ];
  return (
    <div className="me-2 my-3">
      <div className="row">
        <div className="col">
          <ButtonCard title="General Buttons">
            <div className="row">
              <div className="col">
                <div className="fs-6 text-center">Basic Button Styles</div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
                  {basicBtnClasses.map((basicBtnClass, idx) => (
                    <Button key={idx} className={basicBtnClass}>
                      {convertName(basicBtnClass)} Button
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="fs-6 text-center">Disabled Button Styles</div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
                  {basicBtnClasses.map((basicBtnClass, idx) => (
                    <Button key={idx} className={basicBtnClass} disabled>
                      {convertName(basicBtnClass)} Button
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </ButtonCard>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ButtonCard title="Mini Buttons">
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
                  {basicBtnClasses.map((basicBtnClass, idx) => (
                    <Button key={idx} className={`${basicBtnClass} mini`}>
                      {convertName(basicBtnClass)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </ButtonCard>
        </div>
        <div className="col-md-6">
          <ButtonCard title="Small Buttons">
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
                  {basicBtnClasses.map((basicBtnClass, idx) => (
                    <Button key={idx} className={`${basicBtnClass} small`}>
                      {convertName(basicBtnClass)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </ButtonCard>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ButtonCard title="Large Buttons">
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
                  {basicBtnClasses.map((basicBtnClass, idx) => (
                    <Button key={idx} className={`${basicBtnClass} large`}>
                      {convertName(basicBtnClass)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </ButtonCard>
        </div>
        <div className="col-md-6">
          <ButtonCard title="Block Buttons">
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
                  {basicBtnClasses
                    .filter((basicBtnClass) =>
                      ["primary", "info", "success"].includes(basicBtnClass)
                    )
                    .map((basicBtnClass, idx) => (
                      <Button key={idx} className={`${basicBtnClass} full`}>
                        {convertName(basicBtnClass)}
                      </Button>
                    ))}
                </div>
              </div>
            </div>
          </ButtonCard>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ButtonCard title="Buttons With Icons">
            <div className="d-flex gap-2 align-items-center justify-content-center flex-wrap">
              <div>
                <Button className="default" style={{ width: "60px" }}>
                  <IoIosSettings size={25} />
                </Button>
              </div>
              <div>
                <Button
                  className="default"
                  style={{ width: "60px", height: "50px" }}
                >
                  <FaBook size={25} />
                </Button>
              </div>
              <div>
                <Button
                  className="default"
                  style={{ width: "60px", height: "60px" }}
                >
                  <RiDeleteBin5Fill size={25} />
                </Button>
              </div>
              <div>
                <Button
                  className="default"
                  style={{ width: "60px", height: "80px" }}
                >
                  <BsFillHouseFill size={25} />
                </Button>
              </div>
            </div>
          </ButtonCard>
        </div>
        <div className="col-md-6">
          <ButtonCard title="Buttons With Icons">
            <div className="d-flex gap-2 align-items-center justify-content-center flex-wrap">
              <div>
                <Button className="default" style={{ width: "60px" }}>
                  <IoIosSettings size={25} />
                </Button>
              </div>
              <div>
                <Button
                  className="default"
                  style={{ width: "60px", height: "50px" }}
                >
                  <FaBook size={25} />
                </Button>
              </div>
              <div>
                <Button
                  className="default"
                  style={{ width: "60px", height: "60px" }}
                >
                  <RiDeleteBin5Fill size={25} />
                </Button>
              </div>
              <div>
                <Button
                  className="default"
                  style={{ width: "60px", height: "80px" }}
                >
                  <BsFillHouseFill size={25} />
                </Button>
              </div>
            </div>
          </ButtonCard>
        </div>
      </div>
    </div>
  );
}
