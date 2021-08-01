import React from 'react';

export default function Footer() {
	return (
		<div className="w-screen text-white text-center relative md:fixed md:bottom-0 bg-purple-600 p-5 mt-2">
			<p>&#169; Service Check Pty Ltd</p>
			<p>Full MERN stack application developed by Tom Chappell</p>
			<a
				href="https://github.com/choonchy"
				target="_blank"
				rel="noreferrer"
				className="mr-2"
			>
				GitHub
			</a>
			<a
				href="https://www.linkedin.com/in/tom-chappell-05a539140/"
				target="_blank"
				rel="noreferrer"
			>
				LinkedIn
			</a>
			<div>
				Icons made by{' '}
				<a href="https://www.freepik.com" title="Freepik">
					Freepik
				</a>{' '}
				from{' '}
				<a href="https://www.flaticon.com/" title="Flaticon">
					www.flaticon.com
				</a>
			</div>
		</div>
	);
}
