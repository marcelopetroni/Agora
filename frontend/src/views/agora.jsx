import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const Agora = () => {
  return (
    <div className="ag-flex ag-h-screen ag-w-screen ag-bg-brancohome">
		<div className="ag-w-[250px] ag-h-full">
			<Sidebar />
		</div>

		<div className="ag-flex-1 ag-p-6 ag-overflow-y-auto">
			<Outlet />
		</div>
	</div>

  );
};

export default Agora;
