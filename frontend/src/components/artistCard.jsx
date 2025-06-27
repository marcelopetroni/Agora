import { roleStyles } from "../utils/roleStyles";

const ArtistCard = ({ name, roles, description, avatarUrl }) => {
return (
	<div className="ag-flex ag-bg-white ag-rounded-lg ag-shadow-xl ag-justify-center ag-items-center ag-p-6">
			<img
				src={avatarUrl}
				alt={name}
				className="ag-w-32 ag-h-32 ag-rounded-full ag-object-cover ag-mr-5"
			/>
		<div>
			<div className="ag-items-center ag-gap-4">
				<div>
					<h3 className="ag-text-lg ag-font-amiko ag-font-bold ag-text-gray-800">
					{name}
					</h3>
					<div className="ag-flex ag-gap-2 ag-mt-1">
						{roles.map(({ label, variant }) => (
							<span
								key={label}
								className={`
									ag-text-xs ag-font-amiko ag-font-medium ag-px-2 ag-py-1 ag-rounded
									${roleStyles[variant] || "ag-bg-gray-200 ag-text-gray-800"}
								`}
								>
								{label}
							</span>
						))}
					</div>
				</div>
			</div>
			{/* integrar biografia */}
			<p className="ag-font-amiko ag-mt-4 ag-text-gray-600 ag-text-sm leading-relaxed">
				{description}
			</p>
			<div className="ag-justify-self-end">
				<button className="ag-font-amiko ag-mt-4 ag-text-sm ag-font-medium ag-text-lightpurple ag-cursor-pointer hover:ag-underline">
					Leia mais
				</button>
			</div>
		</div>
	</div>
);
};

export default ArtistCard;
