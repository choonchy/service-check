import React from 'react';

export default function ServiceHistory(history) {
	console.log(history);
	return history.history.map((item) => {
		let date = new Date(+item.serviceDate);
		return (
			<div className="text-center shadow p-4 text-sm md:text-base md:w-8/12 m-2">
				<h3 className="m-2 text-xl text-purple-600 border-b-2 pb-2">
					Service History
				</h3>
				<div className="text-center flex flex-row border-b-2 justify-evenly">
					<div className="p-2">
						<h4 className="text-purple-600 border-b-2">Odometer</h4>
						<p>{item.odometer}</p>
					</div>
					<div className="p-2">
						<h4 className="text-purple-600 border-b-2">Service Date</h4>
						<p>{date.toLocaleDateString()}</p>
					</div>
					<div className="p-2">
						<h4 className="text-purple-600 border-b-2">Submitted By</h4>
						<p>{item.submittedBy}</p>
					</div>
				</div>
				<div className="p-2">
					<h4 className="text-purple-600 border-b-2">Service Notes</h4>
					<p>{item.notes}</p>
				</div>
			</div>
		);
	});
}
