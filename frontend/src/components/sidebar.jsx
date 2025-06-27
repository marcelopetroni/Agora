import { NavLink } from "react-router-dom";
import LogoBranca from "../assets/AgoraLogoBranca.svg";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Sidebar = ({ userType }) => {
  const matchLabel =
    userType === "hirer"
      ? "Match"
      : userType === "artist"
      ? "Portfólio"
      : "Home";

  return (
    <div className="ag-flex ag-flex-col ag-fixed ag-bg-lightpurple ag-h-screen ag-w-1/6 ag-min-h-full ag-rounded-tr-3xl ag-rounded-br-3xl">
      <div className="ag-flex ag-flex-col ag-gap-5 ag-m-10">
        <img src={LogoBranca} alt="logo" className="ag-h-10" />
        <div className="ag-flex ag-flex-col ag-gap-8 ag-justify-center ag-ml-4">
            <NavLink
            to="/home"
            className={({ isActive }) =>
                `ag-flex ag-flex-row ag-mt-14 ag-gap-4 ag-justify-start ag-font-amiko ag-font-regular ag-text-2xl ag-cursor-pointer hover:ag-text-gray-300`
            }
            >
            {({ isActive }) => (
                <>
                <GoHomeFill className={`ag-text-3xl ${isActive ? "ag-text-white" : "ag-text-gray-400"}`} />
                <span className={isActive ? "ag-text-white ag-font-bold" : "ag-text-gray-400"}>
                    {matchLabel}
                </span>
                </>
            )}
            </NavLink>
            <NavLink
            to="/perfil"
            className={({ isActive }) =>
                `ag-flex ag-flex-row ag-gap-4 ag-justify-start ag-font-amiko ag-font-medium ag-text-2xl ag-cursor-pointer hover:ag-text-gray-300`
            }
            >
            {({ isActive }) => (
                <>
                <FaUser className={`ag-text-3xl ${isActive ? "ag-text-white" : "ag-text-gray-400"}`} />
                <span className={isActive ? "ag-text-white ag-font-bold" : "ag-text-gray-400"}>
                    Perfil
                </span>
                </>
            )}
            </NavLink>
        </div>
      </div>
      <div className="ag-mt-96 ag-ml-8">
		<a href="/" className="ag-flex ag-flex-row ag-gap-4 ag-items-center">
			<RiLogoutCircleRLine className="ag-text-2xl ag-text-amareloag" />
			<span className="ag-text-lg ag-text-amareloag">
				Sair
			</span>
		</a>
      </div>
    </div>
  );
};

export default Sidebar;
