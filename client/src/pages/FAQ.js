import React from 'react';

export default function FAQ() {
	return (
		<div className="flex flex-col items-center text-center mb-20">
			<h2 className="text-3xl m-4 text-purple-600">
				Frequently Asked Questions
			</h2>
			<div className="shadow text-center md:w-9/12 mb-5 rounded-xl p-2">
				<h3 className="my-2 text-2xl text-purple-600 border-b-2 p-2">
					How do I search for a car?
				</h3>
				<p className="p-2">
					To search for a vehicle, enter the VIN number of the car into the
					search bar on the home page, or directly on the{' '}
					<a href="/vehicle-search" className="text-purple-600">
						Vehicle Search
					</a>{' '}
					page.
				</p>
			</div>
			<div className="shadow text-center md:w-9/12 mb-5 rounded-xl p-2">
				<h3 className="my-2 text-2xl text-purple-600 border-b-2 p-2">
					Why can't I use my car's registration (rego) number?
				</h3>
				<p className="p-2">
					A car's registration plate can change many times through its lifetime.
					A vehicle's VIN number should never be changed, making it a much more
					reliable method of identifying which car you wish to attain a report
					for.
				</p>
			</div>
			<div className="shadow text-center md:w-9/12 mb-5 rounded-xl p-2">
				<h3 className="my-2 text-2xl text-purple-600 border-b-2 p-2">
					What future features do you have planned for Service Check™?
				</h3>
				<p className="p-2">
					Here is a small list of planned features for future:
				</p>
				<ul className="pb-2 text-purple-400">
					<li>Shopping cart system</li>
					<li>Stripe implimentation</li>
					<li>Ability to download reports by PDF</li>
					<li>Automatic email generation</li>
				</ul>
				<p>
					We aim to have all of these systems (and more) up and running within a
					few months, so keep your eyes peeled.
				</p>
			</div>
		</div>
	);
}
