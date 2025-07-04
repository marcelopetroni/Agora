import { useState } from "react";
import { TbPencil } from "react-icons/tb";

const tabs = ["Fotos", "Vídeos", "Áudios", "Textos"];

const ArtistHome = () => {
	const [activeTab, setActiveTab] = useState("Fotos");
	const [isEditing, setIsEditing] = useState(false);
	const mockMedia = Array(6).fill("https://placehold.co/400");

	const handleDelete = media => {
		// função pra apagar midia que vai ser usado depois de integrar com o backend
	};

	return (
		<div className="ag-px-20 ag-py-10 ag-w-full">
			<div className="ag-border-b ag-border-gray-300 ag-pb-6 ag-mb-10">
				<h1 className="ag-font-amiko ag-text-3xl ag-font-bold">Meu Portfólio</h1>
			</div>

			<div className="ag-flex ag-flex-row ag-gap-14 ag-items-start ag-mb-10">
				<div className="ag-flex ag-justify-start ag-flex-shrink-0">
					<img
						src="https://placehold.co/400"
						alt="Perfil"
						className="ag-h-40 ag-w-40 ag-object-cover ag-rounded-full"
					/>
				</div>

				<div className="ag-flex ag-justify-between ag-w-full">
					<div className="ag-col-span-2 ag-flex ag-flex-col ag-gap-2" style={{ width: "600px" }}>
						<h2 className="ag-font-amiko ag-text-md ag-font-semibold">Biografia</h2>
						<textarea
							name="biografia"
							className="ag-resize-none ag-h-40 ag-w-full ag-p-4 ag-rounded-lg ag-border ag-border-gray-300 ag-font-amiko"
							placeholder="Conte um pouco sobre você..."
						></textarea>
					</div>

					<div className="ag-flex ag-justify-end">
						<div className="ag-flex ag-justify-start ag-items-start ag-mr-4">
							{isEditing ? (
								<button
									onClick={() => setIsEditing(false)}
									className="ag-bg-lightpurple ag-text-white ag-px-4 ag-py-2 ag-rounded-lg ag-font-amiko"
								>
								Salvar
								</button>
							) : (
								<TbPencil
									onClick={() => setIsEditing(true)}
									className="ag-cursor-pointer ag-h-10 ag-w-10 ag-p-2 ag-text-white ag-bg-lightpurple ag-rounded-full"
								/>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="ag-flex ag-gap-6 ag-mb-6">
				{tabs.map((tab) => (
				<button
					key={tab}
					onClick={() => setActiveTab(tab)}
					style={{ userSelect: "none" }}
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
			{activeTab === "Fotos" && (
				<div className="ag-grid ag-grid-cols-3 ag-gap-6">
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
							{isEditing && (
								<button
									onClick={() => handleDelete(i)}
									className="ag-absolute ag-top-2 ag-right-2 ag-bg-white ag-rounded-full ag-w-6 ag-h-6 ag-flex ag-items-center ag-justify-center ag-text-xs ag-font-bold"
								>
									×
								</button>
							)}
						</div>
					))}
				</div>
			)}
			{activeTab === "Textos" && (
			<div className="ag-flex ag-flex-col ag-gap-6 ag-w-full">
				{mockMedia.map((src, i) => (
					<div
						key={i}
						className="ag-flex ag-gap-4 ag-w-full ag-bg-white ag-rounded-lg ag-shadow-sm ag-p-4 ag-relative"
					>
						<img
							src={src}
							alt={`text-media-${i}`}
							className="ag-w-40 ag-h-28 ag-object-cover ag-rounded-md"
						/>

						<div className="ag-flex ag-flex-col ag-justify-between ag-w-full">
							<div>
								<h3 className="ag-font-amiko ag-text-md ag-font-bold ag-mb-1">
									{ i % 2 === 0 ? "Vivendo da arte" : "Quando alma canta" }
								</h3>
								<p className="ag-text-sm ag-text-gray-700 ag-overflow-hidden ag-text-ellipsis ag-line-clamp-2">
									Quando decidi viver da minha arte, sabia que não seria uma escolha fácil, mas também não conseguiria imaginar minha vida sendo diferente. Sou cantora, e a música não é só minha profissão, é minha maneira de existir, de sentir e me expressar no mundo...
								</p>
							</div>
							<div className="ag-w-full ag-flex ag-justify-end">
								<button className="ag-font-amiko ag-text-sm ag-font-semibold ag-text-right">
									Leia mais
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		)}
		</div>
	);
};

export default ArtistHome;