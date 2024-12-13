import { IoIosArrowForward } from "react-icons/io";
function SidebarMultiOption({ multiOption }) {
  return (
    <div className="py-3 px-3 border-bottom">
      <div>
        <IoIosArrowForward /> {multiOption}
      </div>
    </div>
  );
}

export default SidebarMultiOption;
