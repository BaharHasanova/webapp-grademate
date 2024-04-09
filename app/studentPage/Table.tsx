import React from "react";

const Table = ({ data, columns }) => {
	return (
		<div className="overflow-x-auto mt-12">
			<table className="min-w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
						{columns.map((column) => (
							<th
								key={column}
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								{column}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{data.map((row) => (
						<tr key={row.id}>
							{columns.map((column) => (
								<td
									key={`${row.id}-${column}`}
									className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
								>
									{row[column]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
