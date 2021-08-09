import React from 'react';

export default function About() {
	return (
		<div className="flex flex-col items-center text-center mb-20">
			<h2 className="text-3xl m-4 text-purple-600">About Service Check™</h2>
			<p className="shadow text-center md:w-9/12 mb-5 rounded-xl p-2">
				Service Check™ is a platform dedicated to ensuring that you make the
				right decision when purchasing a vehicle.
			</p>
			<p className="shadow text-center md:w-9/12 mb-5 rounded-xl p-2">
				The platform uses our extensive database of vehicle service histories
				constructed by data from workshops and vehicle owners.
			</p>
			<div className="shadow text-center md:w-9/12 mb-5 rounded-xl p-2">
				<p>
					This project was ideated, designed and developed by full-stack web
					development student Tom Chappell. Tom's contact details can be found
					below:
				</p>

				<a
					className="p-2 text-purple-600"
					href="https://github.com/choonchy"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				<a
					className="p-2 text-purple-600"
					href="https://www.linkedin.com/in/tom-chappell-05a539140/"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
			</div>
		</div>
	);
}
