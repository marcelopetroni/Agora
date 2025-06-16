import PropTypes from 'prop-types';

const Tags = ({ items, onRemove }) => {
	if (items.length === 0) return null;

	const [first, ...rest] = items;

	return (
		<div className="ag-flex ag-flex-wrap ag-gap-1 ag-mt-1">
			<div
				key={first}
				className="ag-bg-[#3C233C] ag-text-white ag-px-2 ag-py-[2px] ag-rounded-full ag-flex ag-items-center ag-gap-1 text-small"
				style={{ fontSize: '12px', lineHeight: '16px' }}
			>
				{first}
				<span
					onClick={() => onRemove(first)}
					className="ag-cursor-pointer ag-text-xs ag-ml-1"
					style={{ fontSize: '12px' }}
				>
					×
				</span>
			</div>

			{rest.length > 0 && (
				<div
					className="ag-bg-[#3C233C] ag-text-white ag-px-2 ag-py-[2px] ag-rounded-full ag-flex ag-items-center text-small"
					style={{ fontSize: '12px', lineHeight: '16px' }}
				>
					+{rest.length}
				</div>
			)}
		</div>
	);
};

Tags.propTypes = {
	items: PropTypes.array.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default Tags;
