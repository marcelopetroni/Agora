import { useState } from "react";
import { TbPencil } from "react-icons/tb";

const tabs = ["Fotos", "Vídeos", "Áudios", "Textos"];

const ArtistHome = () => {
	const [activeTab, setActiveTab] = useState("Fotos");
	const mockMedia = Array(6).fill("https://placehold.co/400");

	return (
		<div className="ag-px-20 ag-py-10 ag-w-full">
			<div className="ag-border-b ag-border-gray-300 ag-pb-6 ag-mb-10">
				<h1 className="ag-font-amiko ag-text-3xl ag-font-bold">Meu Portfólio</h1>
			</div>

			<div className="ag-grid ag-grid-cols-4 ag-gap-10 ag-items-start ag-mb-10">
				<div className="ag-flex ag-justify-end">
					<img
						src="https://placehold.co/400"
						alt="Perfil"
						className="ag-h-40 ag-w-40 ag-object-cover ag-rounded-full"
					/>
				</div>

				<div className="ag-col-span-2 ag-flex ag-flex-col ag-gap-2">
					<h2 className="ag-font-amiko ag-text-md ag-font-semibold">Biografia</h2>
					<textarea
						name="biografia"
						className="ag-resize-none ag-h-40 ag-w-full ag-p-4 ag-rounded-lg ag-border ag-border-gray-300 ag-font-amiko"
						placeholder="Conte um pouco sobre você..."
					></textarea>
				</div>

				<div className="ag-flex ag-justify-start ag-items-start">
					<TbPencil className="ag-cursor-pointer ag-h-10 ag-w-10 ag-p-2 ag-text-white ag-bg-lightpurple ag-rounded-full" />
				</div>
			</div>

			<div className="ag-flex ag-gap-6 ag-mb-6">
				{tabs.map((tab) => (
				<button
					key={tab}
					onClick={() => setActiveTab(tab)}
					className={`ag-px-4 ag-py-1 ag-rounded-full ag-font-amiko ag-text-sm ${
					activeTab === tab
						? "ag-bg-lightpurple ag-text-white"
						: "ag-text-gray-700 hover:ag-text-black"
					}`}
				>
					{tab}
				</button>
				))}
			</div>

			<div className="ag-grid ag-grid-cols-3 ag-gap-6 ag-pr-10">
				{mockMedia.map((src, i) => (
				<div
					key={i}
					className="ag-relative ag-rounded-lg ag-overflow-hidden ag-bg-black"
				>
					<img
					src={src}
					alt={`media-${i}`}
					className="ag-w-full ag-h-60 ag-object-cover"
					/>
					<button className="ag-absolute ag-top-2 ag-right-2 ag-bg-white ag-rounded-full ag-w-6 ag-h-6 ag-flex ag-items-center ag-justify-center ag-text-xs ag-font-bold">
					×
					</button>
				</div>
				))}
			</div>
		</div>
	);
};

export default ArtistHome;